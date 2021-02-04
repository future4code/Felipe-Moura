import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplication, goToBack } from "../../routes/Coordinator";
import {
  BackButton,
  Container,
  ContentContainer,
  ContentHeader,
} from "../../styles/default";

import { Content, Card } from "./ListTripPageStyles";

import back from "../../images/left-arrow.svg";
import { useRequestData } from "../../hooks/useRequestData";
import { baseURL } from "../../params";


const ListTripPage = () => {
    const trips = useRequestData(`${baseURL}/trips`, [])


  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContentHeader>
          <BackButton onClick={() => goToBack(history)} src={back} alt="back" />
          <h1>Veja nossas opções de Viagens</h1>
         
          <div></div>
        </ContentHeader>
        <Content>
            {trips.map((trip) =>{
                return(
                    <Card key={trip.id}>
                        <h2>{trip.planet}</h2>
                        <h3>Nome do Evento: {trip.name}</h3>
                        <p>Descrição: {trip.description}</p>
                        <p>Duração: {trip.durationInDays} dias</p>
                        <button onClick={() => goToApplication(history, trip.id)}>Embarcar Nesse Foguete</button>
                    </Card>
                )
            })}
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ListTripPage;
