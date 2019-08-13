import React, { useState } from 'react';
import UsersOnline from '../components/UsersOnline';
import SendInput from '../components/SendInput';
import SendButton from '../components/SendButton';
import Message from '../components/Message';
import GlobalStyled from '../globalStyled';
import * as S from './styled';
import {
  Chat,
  Send,
  Title,
  EnterUsername,
  Box,
  Input,
  Button
} from '../components/styled';

import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:4000');

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
    <S.Main>
      <GlobalStyled />
      <EnterUsername username={hasUsername}>
        <Box>
          <Title color={'#4286F5'}>Enter with your username</Title>
          <Input onChange={handleChangeUser} onKeyPress={keyPressedUser} autoFocus />
          <Button onClick={getUsername}>Join</Button>
        </Box>
      </EnterUsername>
      <UsersOnline users={usersOnline} />
      <Chat>
        {messages.map(message => (
          <Message
            user={message.username}
            txt={message.txt}
            me={message.username === username ? true : false}
          />
        ))}
      </Chat>
      <Send>
        <SendInput value={value} handleChange={handleChangeSend} onKeyPress={keyPressedSend} />
        <SendButton click={sendMsg} />
      </Send>
    </S.Main>
  );
}