import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80");
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
