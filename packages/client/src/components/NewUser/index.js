import React from 'react';
import * as S from './styled';

export default ({ username, onChange, onKeyPress, onClick }) => {
  return (
    <S.NewUser username={username}>
      <div>
        <S.Title>Enter with your username</S.Title>
        <S.Input onChange={onChange} onKeyPress={onKeyPress} autoFocus />
        <S.Button onClick={onClick}>Join</S.Button>
      </div>
    </S.NewUser>
  );
}