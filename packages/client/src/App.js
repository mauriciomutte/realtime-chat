import React, { useState } from "react";
import styled from "styled-components";
import socketIOClient from "socket.io-client";

import GlobalStyled from "./globalStyled";
import Header from "./components/Header";
import Send from "./components/Send";
import Chat from "./components/Chat";
import Message from "./components/Message";
import NewUser from "./components/NewUser";

const socket = socketIOClient("http://localhost:4000");

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [usersOnline, setUsersOnline] = useState(0);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [hasUsername, setHasUsername] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  socket.on("messages", (messages) => setMessages(messages));
  socket.on("usersOnline", (usersOnline) => setUsersOnline(usersOnline));
  socket.on("users", (users) => setUsers(users));

  const handleChangeSend = (event) => {
    setValue(event.target.value);
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const keyPressedSend = (event) => {
    if (event.key === "Enter") {
      sendMsg();
    }
  };

  const keyPressedUser = (event) => {
    if (event.key === "Enter") {
      getUsername();
    }
  };

  const getUsername = () => {
    if (!username) return;

    users.unshift({
      username,
    });

    socket.emit("users", users);
    setHasUsername(true);
  };

  const sendMsg = () => {
    if (!value) return;

    messages.unshift({
      username,
      txt: value,
      date: new Date(),
    });

    socket.emit("messages", messages);

    setValue("");
  };

  return (
    <Main>
      <GlobalStyled />
      <NewUser
        username={hasUsername}
        onChange={handleChangeUser}
        onKeyPress={keyPressedUser}
        onClick={getUsername}
      />
      <Header users={usersOnline} />
      <Chat>
        {messages.map((message) => (
          <Message
            user={message.username}
            txt={message.txt}
            me={message.username === username ? true : false}
          />
        ))}
      </Chat>
      <Send
        value={value}
        onChange={handleChangeSend}
        onKeyPress={keyPressedSend}
        send={sendMsg}
      />
    </Main>
  );
};

export default App;
