import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToAdmListTrip,  goToBack,  goToHome } from "../../routes/Coordinator";
import { BackButton, Container, ContentContainer, ContentHeader } from "../../styles/default";
import back from "../../images/left-arrow.svg";
import home from "../../images/home.svg"
import {Form, Inputs, Label} from './LoginPageStyles'
import { useInput } from "../../hooks/useInputs";
import axios from "axios";
import { baseURL } from "../../params";

const LoginPage = () => {
  const history = useHistory();
  const [email, handleEmail] = useInput()
  const [password, handlePassword] = useInput()

  useEffect(() =>{
    const token = localStorage.getItem("token")
    if(token){
      history.push("/admlisttrip")
    }
  })

  const login = () =>{
    
    const body = {
      email: email,
      password: password
    }
    console.log(body)

    axios.post(`${baseURL}/login`, body)
    .then((res) =>{
      localStorage.setItem("token", res.data.token)
      goToAdmListTrip(history)
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  return (
    <Container>
     
      <ContentContainer>
        <ContentHeader>

        <BackButton onClick={() => goToBack(history)} src={back} alt="back" />
          <h1>Seja Bem vindo meu Agente de viagens Interespacial</h1>
        <BackButton onClick={() => goToHome(history)} src={home} alt="back" />
          
        </ContentHeader>
        <Form>
          <Label>E-mail</Label>
          <Inputs value={email} onChange={handleEmail} placeholder="Digite seu login"></Inputs>
          <Label>Senha</Label>
          <Inputs  value={password} onChange={handlePassword}placeholder="Digite sua senha"></Inputs>
          <button onClick={login}>Entrar</button>
        </Form>
      </ContentContainer>
     
    </Container>
  );
};

export default LoginPage;
