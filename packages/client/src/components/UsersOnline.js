import React from 'react';
import { UsersOnline } from './styled';

export default (props) => 
  <UsersOnline>
    {props.users} Users online
  </UsersOnline>