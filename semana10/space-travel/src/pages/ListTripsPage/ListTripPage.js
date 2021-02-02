import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetails, goToHome } from "../../routes/Coordinator";
import {
  BackButton,
  Container,
  ContentContainer,
  ContentHeader,
} from "../../styles/default";

import { Content, Card } from "./ListTripPageStyles";

import back from "../../images/left-arrow.svg";
import { useRequestData } from "../../hooks/useRequestData";


const ListTripPage = () => {
    const trips = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips", [])


  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContentHeader>
          <BackButton onClick={() => goToHome(history)} src={back} alt="back" />
          <h1>Veja nossas opções de Viagens</h1>
         
          <div></div>
        </ContentHeader>
        <Content>
            {trips.map((trip) =>{
                return(
                    <Card key={trip.id}>
                        <h1>{trip.planet}</h1>
                        <p>{trip.name}</p>
                        <button onClick={() => goToDetails(history)}>Veja Mais</button>
                    </Card>
                )
            })}
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ListTripPage;
