import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './CountdownListTeaser.styled';

export interface ICountdown {
  uid: string;
  name: string;
  startDate: Date;
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
        <S.Name>
          <Link to={`/countdown/${countdown.uid}`}>{countdown.name}</Link>
        </S.Name>
      </S.Body>
    </S.Wrapper>
  );
}

export default CountdownListTeaser;
