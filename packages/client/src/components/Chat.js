import React from 'react';
import Message from './Message';
import { Chat } from './styled';

export default () => 
  <Chat>
    <Message user="Maurício" me={true} txt="Que bom, fico feliz em ver vocês bem!"/>
    <Message user="Maithê" me={false} txt="Olá, Maurício! Tudo bem e com você?"/>
    <Message user="Pitoco" me={false} txt="Au au au!"/>
    <Message user="Maurício" me={true} txt="Olá pessoal! Como vocês estão?"/>
  </Chat>
