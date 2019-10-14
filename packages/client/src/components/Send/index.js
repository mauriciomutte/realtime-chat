import React from 'react';
import * as S from './styled';

import SendButton from '../SendButton';

export default ({ value, onChange, onKeyPress, send}) => {
  return (
    <S.Send>
      <S.Input 
        type="text" 
        placeholder="Type anything"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <SendButton click={send} />
    </S.Send>
  );
}