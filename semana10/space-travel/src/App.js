import Home from "./components/Home/Home";
import  { createGlobalStyle } from 'styled-components'


const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: ,
  }

`

function App() {
  return (
    <>
      <GlobalStyled />
    
      <Home />
    
    </>
  );
}

export default App;
