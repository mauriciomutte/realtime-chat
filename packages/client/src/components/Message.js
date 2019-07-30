import React from 'react';
import { Message, MessageBlock, Name, Text } from './styled';

export default (props) => 
  <Message {...props}>
    <MessageBlock {...props}>
      <Name>{props.user}</Name>
      <Text>{props.txt}</Text>
    </MessageBlock>
  </Message>