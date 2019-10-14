import React, { useState } from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';

import GlobalStyled from './globalStyled';
import Send from './components/Send';
import Chat from './components/Chat';
import Message from './components/Message';
import NewUser from './components/NewUser';

const socket = socketIOClient('http://localhost:4000');

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const UsersOnline = styled.div`
  background-color: #4286F5;
  padding: 1em 0;
  text-align: center;

  span {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default () => {
  const [usersOnline, setUsersOnline] = useState(0);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [hasUsername, setHasUsername] = useState(false);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);

  socket.on('messages', messages => setMessages(messages));
  socket.on('usersOnline', usersOnline => setUsersOnline(usersOnline));
  socket.on('users', users => setUsers(users));

  function handleChangeSend(event) {
    setValue(event.target.value);
  }

  function handleChangeUser(event) {
    setUsername(event.target.value);
  }

  function keyPressedSend(event) {
    if (event.key === "Enter") { sendMsg(); }
  }

  function keyPressedUser(event) {
    if (event.key === "Enter") { getUsername(); }
  }

  function getUsername() {
    users.unshift({
      username: username
    });

    socket.emit('users', users);
    setHasUsername(true);
  }

  function sendMsg() {
    messages.unshift({
      username: username,
      txt: value,
      date: new Date(),
    });

    socket.emit('messages', messages);

    setValue('');
  }

  return (
    <Main>
      <GlobalStyled />
      <NewUser
        username={hasUsername}
        onChange={handleChangeUser}
        onKeyPress={keyPressedUser}
        onClick={getUsername}
      />
      <UsersOnline>
        <span>{usersOnline} Users online</span>
      </UsersOnline>
      <Chat>
        {messages.map(message => (
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
}
