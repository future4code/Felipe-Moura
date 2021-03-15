import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { goToCreatePage, goToFeedPage } from "../../Coordinator";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { LoginContainer, LoginForms } from "./LoginFormStyle";

function LoginForm() {
  const email = useForm();
  const password = useForm();
  const history = useHistory();
  const { userLogin, loading } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: email.value,
      password: password.value,
    };
    if (email.validate() && password.validate()) {
      userLogin(body);
      
    }
  };

  return (
    <LoginContainer>
      <LoginForms onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="senha" type="password" name="password" {...password} />
        <div>
        {loading ? <Button>Carregando...</Button> : <Button>Entrar</Button>}
        <Button onClick={() => goToCreatePage(history)}>Cadastra-se</Button>

        </div>
      </LoginForms>
    </LoginContainer>
  );
}

export default LoginForm;
