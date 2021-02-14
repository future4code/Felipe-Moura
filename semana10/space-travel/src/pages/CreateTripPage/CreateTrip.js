import React from "react";
import { goToBack } from "../../routes/Coordinator";
import { BackButton, Container, ContentContainer, ContentHeader } from "../../styles/default";
import back from "../../images/left-arrow.svg";
import { useHistory } from "react-router-dom";
import { Form, Inputs, Label } from "../ApplicationTrip/ApplicationTripStyles";
import { useInput } from "../../hooks/useInputs";
import axios from "axios";
import { baseURL } from "../../params";
import { Content } from "../ListTripsPage/ListTripPageStyles";

const CreateTrip = () => {
  
  const history = useHistory()

  const [name, handleName] = useInput()
  const [planet, handlePlanet] = useInput()
  const [description, handleDescription] = useInput()
  const [date, handleDate] = useInput()
  const [durationInDays, handleDurationInDays] = useInput()

  const handleCreate = () =>{
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    }
    axios.post(`${baseURL}/trips`, body,{
        headers:{
            auth: localStorage.getItem("token")
        }
    })
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

          <div></div>
        </ContentHeader>
        
    <Content>

        <Form>
          <Label>Nome do Evento</Label>
          <Inputs value={name} onChange={handleName} placeholder="Digite o nome do Evento"></Inputs>
          <Label>Planeta</Label>
          <Inputs value={planet} onChange={handlePlanet} placeholder="Em qual planeta será"></Inputs>
          <Label>Data</Label>
          <Inputs value={description} onChange={handleDescription} placeholder="Data"></Inputs>
          <Label>Descrição</Label>
          <Inputs value={date} onChange={handleDate} placeholder="Digite sua promissão"></Inputs>
          <Label>Duração em dias</Label>
          <Inputs valeu={durationInDays} onChange={handleDurationInDays} type="number" placeholder="Duração do Evento"></Inputs>
          <button onClick={handleCreate}>Criar Evento</button>
        </Form>
    </Content>
        
      </ContentContainer>
    </Container>
  );
};

export default CreateTrip;