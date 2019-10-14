import styled from 'styled-components';

export const NewUser = styled.div`
  align-items: center;
  background-color: #0009;
  display: ${props => props.username ? 'none' : 'flex'};
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;

  div {
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
  }
`;

export const Title = styled.h2`
  color: #4286F5;
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
`;