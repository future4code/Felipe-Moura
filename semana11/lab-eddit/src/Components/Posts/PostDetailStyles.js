import styled from 'styled-components'

export const PostDetailContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    border: 1px solid red;
    margin: 0.5rem auto ;
    justify-content: center;
    height: 38rem;

`

export const PostInfo = styled.div`
    border: 1px solid blue;
    

`

export const PostTitle = styled.h2`
    font-size: 1.25rem;
    text-transform: uppercase;
    text-align: center
`