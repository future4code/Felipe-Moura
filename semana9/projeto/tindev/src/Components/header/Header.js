import React, { useState } from "react";
import { HeaderContainer } from "./HeaderStyle";

function Header() {
  const [match, setMatch] = useState(true);

  const matchList = () => {
    setMatch(!match);
  };

  if (match) {
    return (
      <HeaderContainer>
        TinDev
        <button onClick={matchList}>Lista de Match</button>
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        TinDev
        <button onClick={matchList}> Voltar</button>
      </HeaderContainer>
    );
  }
}

export default Header;
