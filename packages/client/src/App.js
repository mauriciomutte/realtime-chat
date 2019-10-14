import React, { useState } from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';

import GlobalStyled from './globalStyled';
import Send from './components/Send';
import Chat from './components/Chat';
import Message from './components/Message';
import {
  Title,
  EnterUsername,
  Box,
  Input,
  Button,
  UsersOnline,
  UsersList
} from './components/styled';

const socket = socketIOClient('http://localhost:4000');

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default () => {
  const [usersOnline, setUsersOnline] = useState(0);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [hasUsername, setHasUsername] = useState(false);
  const [showUsersList, setShowUsersList] = useState(false);
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
      <UsersList
        show={showUsersList}
        onClick={() => setShowUsersList(false)}
      >
        <div>
          <h2>{usersOnline} Users Online</h2>
          <ul>
            {users.map(users => (
              <li>{users.username}</li>
            ))}
          </ul>
        </div>
      </UsersList>
      <EnterUsername username={hasUsername}>
        <Box>
          <Title color={'#4286F5'}>Enter with your username</Title>
          <Input onChange={handleChangeUser} onKeyPress={keyPressedUser} autoFocus />
          <Button onClick={getUsername}>Join</Button>
        </Box>
      </EnterUsername>
      <UsersOnline>
        <button onClick={() => setShowUsersList(true)}>{usersOnline} Users online</button>
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
