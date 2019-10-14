import React from 'react';
import * as S from './styled';

export default (props) => 
  <S.SendButton onClick={e => props.click()}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#9E9E9E" width="24" height="24" viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  </S.SendButton>