// import Header from "./Components/header/Header";
import { MainContainer, Container } from "./styles/Index";
import Main from "./Components/main/Main";
import { useState } from "react";
import { HeaderContainer } from "./Components/header/HeaderStyle";
import MatchList from "./Components/matchs/Matchs";

function App() {
  const [match, setMatch] = useState(true);

  const matchList = () => {
    setMatch(!match);
  };

  if (match) {
    return (
      <MainContainer>
        <Container>
          <HeaderContainer>
            TinDev
            <button onClick={matchList}>Lista de Match</button>
          </HeaderContainer>
          <Main />
        </Container>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
      <Container>
        <HeaderContainer>
          TinDev
          <button onClick={matchList}>Voltar</button>
        </HeaderContainer>
        <MatchList  returnHome={matchList}/>
      </Container>
    </MainContainer>

    );
  }
}

export default App;
