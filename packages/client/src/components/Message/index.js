import React from 'react';
import * as S from './styled';

export default (props) => 
  <S.Message {...props}>
    <S.MessageBlock {...props}>
      <S.Name>{props.user}</S.Name>
      <S.Text>{props.txt}</S.Text>
    </S.MessageBlock>
  </S.Message>