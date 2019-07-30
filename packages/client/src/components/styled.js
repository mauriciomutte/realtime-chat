import styled from 'styled-components';

export const User = styled.div`
  font-size: 14px;
  margin: 0 20px;
`;

export const UserImg = styled.img`
  border-radius: 50%;
  height: auto;
  max-width: 65px;
`;

export const UsersOnline = styled.div`
  display: flex;
  margin: 1em 0;
  overflow: auto;
  text-align: center;
`;

export const Chat = styled.div`
  align-content: flex-end;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  padding: 10px;
  overflow: auto;
`;

export const Message = styled.div`
  display: flex;
  justify-content: ${props => props.me ? 'flex-end' : 'flex-start'};
`;

export const MessageBlock = styled.div`
  background-color: ${props => props.me ? '#FFF' : '#4286F5'};
  border-radius: ${props => props.me ? '20px 20px 0 20px' : '20px 20px 20px 0'};
  color: ${props => props.me ? '#282F37' : '#FFF'};
  display: table;
  margin: 5px 0;
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

export const Input = styled.input`
  border: none;
  border-radius: 30px;
  box-shadow: 1px 2px 1px #0003;
  padding: 0 15px;
  width: 100%;
  max-width: 600px;
`;

export const Button = styled.button`
  align-items: center;
  border: none;
  border-radius: 100%;
  box-shadow: 1px 2px 1px #0003;
  background-color: #FFF;
  cursor: pointer;
  display: flex;
  margin: 0 0 0 10px;
  padding: 0 8px 0 10px;
`;
