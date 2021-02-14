import React from "react";
import { goToBack, goToHome } from "../../routes/Coordinator";
import { BackButton, Container, ContentContainer, ContentHeader } from "../../styles/default";
import back from "../../images/left-arrow.svg";
import { useHistory, useParams } from "react-router-dom";
import { Form, Inputs, Label, TextArea } from "./ApplicationTripStyles";
import { useInput } from "../../hooks/useInputs";
import axios from "axios";
import { baseURL } from "../../params";
import home from "../../images/home.svg";

const ApplicationTrip = () => {
  
  const history = useHistory()
  const pathParams = useParams()
  const [name, handleName] = useInput()
  const [age, handleAge] = useInput()
  const [application, handleApplication] = useInput()
  const [job, handleJob] = useInput()
  const [country, handleCountry] = useInput()

  const handleApply = () =>{
    const body = {
      name: name,
      age: age,
      applicationText: application,
      profession: job,
      country: country
    }
    const id = pathParams.id
    axios.post(`${baseURL}/trips/${id}/apply`, body)
    .then((res)=>{
      goToBack(history)
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
          <h1>Formulário de Aplicação para Viagem</h1>

          <BackButton onClick={() => goToHome(history)} src={home} alt="back" />
        </ContentHeader>
        <Form>
          <Label>Nome</Label>
          <Inputs value={name} onChange={handleName} placeholder="Digite seu nome"></Inputs>
          <Label>Idade</Label>
          <Inputs value={age} onChange={handleAge} type="number"placeholder="Sua idade"></Inputs>
          <Label>Porque você deveria ser selecionado</Label>
          <TextArea value={application} onChange={handleApplication} placeholder="Motivos para te escolhermos"></TextArea>
          <Label>Profissão</Label>
          <Inputs value={job} onChange={handleJob} placeholder="Digite sua promissão"></Inputs>
          <Label>País</Label>
          <Inputs valeu={country} onChange={handleCountry} placeholder="Digite seu pais"></Inputs>
          <button onClick={handleApply}>Enviar Inscrição</button>
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default ApplicationTrip;
