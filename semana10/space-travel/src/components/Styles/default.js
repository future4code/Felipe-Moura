import styled from 'styled-components'


export const ButtonDefault = styled.button`
    background-color: transparent;
    margin: 5vw;
    color: #ddd;
    border: 2px solid #ddd;
    padding: 1vw;
    cursor: pointer;
    border-radius: 10px;
    width: 100px;

    :hover{
        transition: 1000ms;
        background-color: #ddd;
        color: #333;
        border-color: #333;
        transform: scale(1.25)
    }
`
