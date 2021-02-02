import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { Container } from "../../styles/default";

const LoginPage = () => {
  const history = useHistory();
  return (
    <Container>
      <button onClick={() => goToHome(history)}>Voltar</button>
      <form>
        <label>Nome</label>
        <input placeholder="Digite seu login"></input>
        <label>senha</label>
        <input placeholder="Digite sua senha"></input>
        <button>Entrar</button>
      </form>
    </Container>
  );
};

export default LoginPage;
