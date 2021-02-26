import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Headers = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.5rem 2rem;
`;


function Header() {
  const { data, userLogout, autoLogin } = useContext(UserContext);
  
  return (
    <Headers>
      <Nav>
        <Link to="/">Home</Link>
        {data ? (
          <Link to="/feed">{data.username}
          <button onClick={userLogout}>Sair</button></Link>
        ) : (
          <Link to="/login">Login/Criar</Link>
        )}
      </Nav>
    </Headers>
  );
}

export default Header;
