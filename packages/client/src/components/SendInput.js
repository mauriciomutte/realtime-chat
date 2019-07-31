import React from 'react';
import { SendInput } from './styled';

export default (props) => 
  <SendInput 
    type="text" 
    placeholder="Type anything"
    value={props.value}
    onChange={props.handleChange}
    onKeyPress={props.onKeyPress}
    />