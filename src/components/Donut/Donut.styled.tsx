import styled from '@emotion/styled'

interface IDonutRingProps {
    /**
     * Is this the principal call to action on the page?
     */
     percentage: number;
}

export const Meter = styled.meter`
    all: unset;
    appearance: none;
    display: block;
    height: auto;
    width: 100%;
`;

export const DonutRing = styled.div<IDonutRingProps>`
    position: relative;
    z-index: 0;

    &::before {
        border: 1.5em solid #a1a1a1;
        border-radius: 999vw;
        content: "";
        display: block;
        height: calc(100% + 0.5em);
        left: -0.25em;
        position: absolute;
        top: -0.25em;
        width: calc(100% + 0.5em);
    }

    &::after {
        aspect-ratio: 1 / 1;
        background: 
            radial-gradient(
                closest-side circle at center, 
                transparent calc(100% - 1em), 
                var(--accent, black) calc(100% - 1em), 
                var(--accent, black)
            );    
        border-radius: 999vw;
        content: "";
        display: block;
        mask-image: ${props => `
            conic-gradient(
                hsla(0, 0%, 100%, 1) 0 ${ Math.round((props.percentage / 100) * 360) }deg, 
                transparent 0 ${ Math.round((props.percentage / 100) * 360) }deg
            );
        `};    
        width: 100%;
    }
`;
    
export const DonutHole = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
`;
