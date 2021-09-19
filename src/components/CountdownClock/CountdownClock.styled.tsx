import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > * {
        flex: 0 1 250px;
        padding: 1rem;
    }
`;

export const Label = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 2em;
`;

export const LabelNumber = styled.div`
    font-size: 1.5em;
`;
