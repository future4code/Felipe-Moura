import React from "react";
import { HeaderContainer } from "./HeaderStyle";

function Header(props) {
  return (
    <HeaderContainer>
      TinDev
      <button onClick={props.matchList()}>{props.button}</button>
    </HeaderContainer>
  );
}
export default Header;
