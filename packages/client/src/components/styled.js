import styled from 'styled-components';

export const UsersOnline = styled.div`
  background-color: #4286F5;
  color: #fff;
  padding: 1em 0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

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

export const Send = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  margin: 10px 0 4em;
  padding: 0 10px;
`;

export const SendInput = styled.input`
  border: none;
  border-radius: 30px;
  box-shadow: 1px 2px 1px #0003;
  padding: 0 15px;
  width: 100%;
  max-width: 600px;
`;

export const SendButton = styled.button`
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

export const EnterUsername = styled.div`
  align-items: center;
  background-color: #0009;
  display: ${props => props.username ? 'none' : 'flex'};
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const Box = styled.div`
  align-items: center;
  background-color: #EBEFF2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  margin: 1em;
  max-width: 800px;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${props => props.color};
  margin: 0 0 1em;
`;

export const Input = styled.input`
  height: 25px;
  width: 250px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #4286F5;
  border: 2px solid #4286F5;
  border-radius: 5px;
  box-shadow: 4px 4px 0 rgba(129, 174, 247, .6);
  color: #FFF;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  margin: 1em 0 0;
  padding: 3px 35px;

  :hover {
  }
`;