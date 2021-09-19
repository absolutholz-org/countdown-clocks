import React from 'react';

import * as S from './Donut.styled';

interface IDonutProps {
    /**
     * Is this the principal call to action on the page?
     */
    percentage: number;

    children?: React.ReactNode,
}

/**
 * Primary UI component for user interaction
 */
function Donut ({
    percentage,
    children,
    ...props
}: IDonutProps): JSX.Element {
    return (
        <S.Meter>
            <S.DonutRing
                percentage={ percentage }
                { ...props }
            >
                <S.DonutHole>{ children }</S.DonutHole>
            </S.DonutRing>
        </S.Meter>
    );
};

export default Donut;
