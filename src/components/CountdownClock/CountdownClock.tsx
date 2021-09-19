import React from 'react';

import * as S from './CountdownClock.styled';
import Donut from './../Donut';

interface ICountdownClockProps {
    /**
     * Is this the principal call to action on the page?
     */
    date: Date;

    children?: JSX.Element,
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
function CountdownClock ({
    date,
    children,
    ...props
}: ICountdownClockProps): JSX.Element {
    const now = new Date();
    let differenceInMilliseconds = date.valueOf() - now.valueOf();
    
    const days = Math.floor(differenceInMilliseconds / MILLISECONDS.day);
    differenceInMilliseconds = differenceInMilliseconds >= 0 ? differenceInMilliseconds - (days * MILLISECONDS.day): differenceInMilliseconds;
    
    const hours = Math.floor(differenceInMilliseconds / MILLISECONDS.hour);
    differenceInMilliseconds = differenceInMilliseconds >= 0 ? differenceInMilliseconds - (hours * MILLISECONDS.hour): differenceInMilliseconds;
    
    const minutes = Math.floor(differenceInMilliseconds / MILLISECONDS.minute);
    differenceInMilliseconds = differenceInMilliseconds >= 0 ? differenceInMilliseconds - (minutes * MILLISECONDS.minute): differenceInMilliseconds;
    
    const seconds = Math.floor(differenceInMilliseconds / MILLISECONDS.second);
    
    console.log({days, hours, minutes, seconds});
    
    return (
        <S.Wrapper>
            <Donut
                percentage={ days / 365  * 100 }
            >
                <S.Label><S.LabelNumber>{ days }</S.LabelNumber> days</S.Label>
            </Donut>
            <Donut
                percentage={ hours / 24  * 100 }
            >
                <S.Label><S.LabelNumber>{ hours }</S.LabelNumber> hours</S.Label>
            </Donut>
            <Donut
                percentage={ minutes / 60  * 100 }
            >
                <S.Label><S.LabelNumber>{ minutes }</S.LabelNumber> minutes</S.Label>
            </Donut>
            <Donut
                percentage={ seconds / 60  * 100 }
            >
                <S.Label><S.LabelNumber>{ seconds }</S.LabelNumber> seconds</S.Label>
            </Donut>
        </S.Wrapper>
    );
};

export default CountdownClock;
