import styled from "styled-components";

export const ContainerMatchs = styled.div`
  border: 1px solid blue;
  height: 537px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
 
`;

export const Title = styled.h1`
  font-size: 16px;
  margin: 0px;
`;
export const UnorderedList = styled.ul`
  margin: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  ::-webkit-scrollbar{
      display: none
  }

`;

export const ListItem = styled.li`
    list-style: none;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 5px;
    padding: 10px;
    border-bottom: 1px solid lightgray;

`

export const PerfilImagem = styled.img`
    border: 1px solid red;
    max-width: 75px;
`
export const InfoPerfil = styled.div`
    padding-left: 20px
`