import React from "react";
import { Title, Paragraph, SubTitle } from "./HomePageStyles";
import { ButtonDefault, Container } from "../../styles/default";
import { useHistory } from "react-router-dom";
import { goToListTrip, goToLogin } from "../../routes/Coordinator";

const HomePage = () => {
  const history = useHistory();

  
  return (
    <Container>
      <Title>Bem Vindo a LabeX</Title>
      <Paragraph> Sua próxima viagem espacial está aqui. </Paragraph>
      <SubTitle>Quem é você?</SubTitle>

      <div>
        <ButtonDefault onClick={() => goToListTrip(history)}>Viajante</ButtonDefault>
        <ButtonDefault onClick={() => goToLogin(history)}>Organizador</ButtonDefault>
      </div>
    </Container>
  );
};

export default HomePage;
