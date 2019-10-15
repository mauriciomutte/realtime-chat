import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #4286F5;
  padding: 1em 0;
  text-align: center;

  span {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default ({ users }) => {
  return (
    <Header>
      <span>{users} Users online</span>
    </Header>
  );
}