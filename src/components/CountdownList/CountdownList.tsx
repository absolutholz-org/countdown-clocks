import React from 'react';

import * as S from './CountdownList.styled';
import type { ICountdown } from '../CountdownListTeaser';
import CountdownListTeaser from '../CountdownListTeaser';

interface ICountdownListProps {
  countdowns: ICountdown[];
}

/**
 * Primary UI component for user interaction
 */
function CountdownList({
  countdowns,
  ...props
}: ICountdownListProps): JSX.Element {
  return (
    <S.List>
      {countdowns.map((countdown) => (
        <S.ListItem key={countdown.uid}>
          <CountdownListTeaser countdown={countdown} />
        </S.ListItem>
      ))}
    </S.List>
  );
}

export default CountdownList;
