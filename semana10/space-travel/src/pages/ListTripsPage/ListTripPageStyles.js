import styled from 'styled-components'
export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content:center;
  align-items: center;

`;

export const Card = styled.li`
  border: 1px solid #ddd;
  border-radius: 10px;
  list-style: none;
  width: 400px;
  height: 300px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const ImageTrip = styled.img`
    width: 100%;
    height: 50%;
`

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ImageTrash = styled.img`
  width: 35px;
  position: absolute;
  top: 85%;
  left: 85%;
  cursor:pointer;

`
