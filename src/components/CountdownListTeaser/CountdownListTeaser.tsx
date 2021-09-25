import React from 'react';

import * as S from './CountdownListTeaser.styled';

export interface ICountdown {
  uid: string;
  name: string;
  creationDate: Date;
  targetDate: Date;
}

interface ICountdownListTeaserProps {
  countdown: ICountdown;
}

/**
 * Primary UI component for user interaction
 */
function CountdownListTeaser({
  countdown,
  ...props
}: ICountdownListTeaserProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Body>
        <S.Name>{countdown.name}</S.Name>
      </S.Body>
    </S.Wrapper>
  );
}

export default CountdownListTeaser;
