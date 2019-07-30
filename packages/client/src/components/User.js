import React from 'react';
import { User, UserImg } from './styled';

export default (props) => 
  <User>
    <UserImg src={props.userimg} alt="User profile" srcset={props.userimg}/>
    <h3>{props.username}</h3>
  </User>