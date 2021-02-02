import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
}

export default App;
