import React from 'react';
import * as S from './styled';

export default (props) => 
  <S.SendInput 
    type="text" 
    placeholder="Type anything"
    value={props.value}
    onChange={props.handleChange}
    onKeyPress={props.onKeyPress}
  />