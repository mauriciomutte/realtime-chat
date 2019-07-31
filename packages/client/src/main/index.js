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
        <UsersOnline />
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