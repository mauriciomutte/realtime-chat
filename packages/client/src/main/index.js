import React, { Component } from 'react';
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

const initialState = {
  usersOnline: 0,
  users: [],
  username: '', 
  hasUsername: false,
  value: '',
  messages: []
};

export default class Main extends Component {
  state = { ...initialState };

  constructor(props) {
    super(props);

    this.sendMsg = this.sendMsg.bind(this);
    this.handleChangeSend = this.handleChangeSend.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.keyPressedSend = this.keyPressedSend.bind(this);
    this.keyPressedUser = this.keyPressedUser.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  handleChangeSend(event) {
    this.setState({value: event.target.value});
  }

  handleChangeUser(event) {
    this.setState({username: event.target.value});
  }

  keyPressedSend(event) { 
    if (event.key === "Enter") { this.sendMsg(); }
  }

  keyPressedUser(event) { 
    if (event.key === "Enter") { this.getUsername(); }
  }

  getUsername() {
    this.state.users.unshift({
      username: this.state.username
    });

    socket.emit('users', this.state.users);
    this.setState({hasUsername: true}); 
  }

  sendMsg() {
    this.state.messages.unshift({
      username: this.state.username,
      txt: this.state.value,
    });

    socket.emit('messages', this.state.messages);

    this.setState({value: ''});
  }
  
  render() {
    return (
      <S.Main>
        <GlobalStyled />
        <EnterUsername username={hasUsername}>
          <Box>
            <Title color={'#4286F5'}>Enter with your username</Title>
            <Input onChange={this.handleChangeUser} onKeyPress={this.keyPressedUser} autoFocus/>
            <Button onClick={this.getUsername}>Join</Button>
          </Box>
        </EnterUsername>
        <UsersOnline users={usersOnline}/>
        <Chat>
          <Message user="Maurício" me={true} txt="Que bom, fico feliz em ver vocês bem!"/>
          <Message user="Maithê" me={false} txt="Olá, Maurício! Tudo bem e com você?"/>
          <Message user="Pitoco" me={false} txt="Au au au!"/>
          <Message user="Maurício" me={true} txt="Olá pessoal! Como vocês estão?"/>
        </Chat>
        <Send>
          <SendInput value={value} handleChange={this.handleChangeSend} onKeyPress={this.keyPressedSend}/>
          <SendButton click={this.sendMsg} />
        </Send>
      </S.Main>
    );
  }
}