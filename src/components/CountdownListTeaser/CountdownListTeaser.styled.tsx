import styled from '@emotion/styled';

export const Wrapper = styled.article`
    background-color: var(--surface);
    border-radius: 4px;
    box-shadow: 
        0 2px 1px -1px rgba(0,0,0,0.2), 
        0 1px 1px 0 rgba(0,0,0,0.14), 
        0 1px 3px 0 rgba(0,0,0,0.12);
    color: var(--on-surface);
    overflow: hidden;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Body = styled.div`
    padding: 1rem;
`;

export const Name = styled.h3`
    margin: 0;
`;
