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
  align-items:center;
  justify-content: space-around;
`;

export const ImageTrip = styled.img`
    width: 100%;
    height: 50%;
`