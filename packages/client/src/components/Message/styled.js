import styled from 'styled-components';

export const Message = styled.div`
  display: flex;
  justify-content: ${props => props.me ? 'flex-end' : 'flex-start'};
`;

export const MessageBlock = styled.div`
  background-color: ${props => props.me ? '#FFF' : '#4286F5'};
  border-radius: ${props => props.me ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  color: ${props => props.me ? '#282F37' : '#FFF'};
  display: table;
  margin: 5px 10px;
  max-width: 55%;
  padding: 10px 15px;
`;

export const Name = styled.span`
  display: block;
  margin: 0 0 3px;
  font-weight: bolder;
`;

export const Text = styled.span`
  display: block;
  font-weight: lighter;
`;
