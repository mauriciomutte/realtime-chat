import React from 'react';
import styled from 'styled-components';

export const Chat = styled.div`
  align-content: flex-end;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  margin: 0 auto;
  max-width: 700px;
  overflow: auto;
  width: 100%;
`;

export default ({ children }) => {
  return (
    <Chat>
      {children}
    </Chat>
  );
}