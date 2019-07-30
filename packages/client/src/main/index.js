import React, { Component } from 'react';
import UsersOnline from '../components/UsersOnline'
import Chat from '../components/Chat'
import Send from '../components/Send'
import GlobalStyled from '../globalStyled';
import * as S from './styled'

export default class Main extends Component {
  render() {
    return (
      <S.Main>
        <GlobalStyled />
        <UsersOnline />
        <Chat />
        <Send />
      </S.Main>
    );
  }
}