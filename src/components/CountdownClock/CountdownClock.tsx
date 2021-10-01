import React, { useState, useEffect } from 'react';

import * as S from './CountdownClock.styled';
import Donut from './../Donut';

interface ICountdownClockProps {
  /**
   * Is this the principal call to action on the page?
   */
  targetDate: Date;

  startDate?: Date;
}

enum MILLISECONDS {
  day = 24 * 60 * 60 * 1000,
  hour = 60 * 60 * 1000,
  minute = 60 * 1000,
  second = 1000,
}

/**
 * Primary UI component for user interaction
 */
function CountdownClock({
  targetDate,
  startDate,
  ...props
}: ICountdownClockProps): JSX.Element {
  const [now, setNow] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const daysBetweenStartAndTarget =
    startDate !== undefined
      ? Math.floor(
          (targetDate.valueOf() - startDate.valueOf()) / MILLISECONDS.day
        )
      : 365;

  const updateClocks = () => {
    let differenceInMilliseconds = targetDate.valueOf() - now.valueOf();

    const days = Math.floor(differenceInMilliseconds / MILLISECONDS.day);
    differenceInMilliseconds =
      differenceInMilliseconds >= 0
        ? differenceInMilliseconds - days * MILLISECONDS.day
        : differenceInMilliseconds;

    const hours = Math.floor(differenceInMilliseconds / MILLISECONDS.hour);
    differenceInMilliseconds =
      differenceInMilliseconds >= 0
        ? differenceInMilliseconds - hours * MILLISECONDS.hour
        : differenceInMilliseconds;

    const minutes = Math.floor(differenceInMilliseconds / MILLISECONDS.minute);
    differenceInMilliseconds =
      differenceInMilliseconds >= 0
        ? differenceInMilliseconds - minutes * MILLISECONDS.minute
        : differenceInMilliseconds;

    const seconds = Math.floor(differenceInMilliseconds / MILLISECONDS.second);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    updateClocks();
  }, [now]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.Wrapper>
      <div>
        <Donut percentage={(days / daysBetweenStartAndTarget) * 100}>
          <S.Label>
            <S.LabelNumber>{days}</S.LabelNumber> days
          </S.Label>
        </Donut>
      </div>
      <div>
        <Donut percentage={(hours / 24) * 100}>
          <S.Label>
            <S.LabelNumber>{hours}</S.LabelNumber> hours
          </S.Label>
        </Donut>
      </div>
      <div>
        <Donut percentage={(minutes / 60) * 100}>
          <S.Label>
            <S.LabelNumber>{minutes}</S.LabelNumber> minutes
          </S.Label>
        </Donut>
      </div>
      <div>
        <Donut percentage={(seconds / 60) * 100}>
          <S.Label>
            <S.LabelNumber>{seconds}</S.LabelNumber> seconds
          </S.Label>
        </Donut>
      </div>
    </S.Wrapper>
  );
}

export default CountdownClock;
