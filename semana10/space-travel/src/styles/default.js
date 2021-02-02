import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80");
`;

export const ContentContainer = styled.div`
  background-color: rgba(110, 110, 110, 0.7);
  width: 85vw;
  margin: auto;
  height: 85vh;
  border-radius: 1vh;
  box-sizing: border-box;
`;
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const BackButton = styled.img`
  width: 35px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const Content = styled.ul`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 400px;
  justify-content:center;
  align-items: center;
`;

export const Card = styled.li`
  border: 1px solid #ddd;
  border-radius: 10px;
  list-style: none;
  width: 350px;
  height: 250px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
`;

export const ButtonDefault = styled.button`
  background-color: transparent;
  margin: 5vw;
  color: #ddd;
  border: 2px solid #ddd;
  padding: 1vw;
  cursor: pointer;
  border-radius: 10px;
  width: 100px;

  :hover {
    transition: 1000ms;
    background-color: #ddd;
    color: #333;
    border-color: #333;
    transform: scale(1.25);
  }
`;
