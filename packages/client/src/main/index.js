import React, { Component } from 'react';
import UsersOnline from '../components/UsersOnline'
import Send from '../components/Send'
import Message from '../components/Message';
import GlobalStyled from '../globalStyled';
import { Chat } from '../components/styled';
import * as S from './styled'

export default class Main extends Component {
  render() {
    return (
      <S.Main>
        <GlobalStyled />
        <UsersOnline />
        <Chat>
          <Message user="Maurício" me={true} txt="Que bom, fico feliz em ver vocês bem!"/>
          <Message user="Maithê" me={false} txt="Olá, Maurício! Tudo bem e com você?"/>
          <Message user="Pitoco" me={false} txt="Au au au!"/>
          <Message user="Maurício" me={true} txt="Olá pessoal! Como vocês estão?"/>
        </Chat>
        <Send />
      </S.Main>
    );
  }
}