import React from "react";
import { useHistory } from "react-router-dom";
import { goToDetails, goToHome } from "../../routes/Coordinator";
import {
  BackButton,
    ButtonDefault,
  Card,
  Container,
  Content,
  ContentContainer,
  ContentHeader,
} from "../../styles/default";

import back from "../../images/left-arrow.svg";

import home from "../../images/home.svg";

const ListTripPage = () => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContentHeader>
          <BackButton onClick={() => goToHome(history)} src={back} alt="back" />
          <h1>Veja nossas opções de Viagens</h1>
          <BackButton onClick={() => goToHome(history)} src={home} alt="back" />
        </ContentHeader>
        <Content>
          <Card>
            Teste
            <ButtonDefault onClick={() => goToDetails(history)}> Veja Mais</ButtonDefault>
          </Card>
          <Card>Teste</Card>
          <Card>Teste</Card>
          <Card>Teste</Card>
          <Card>Teste</Card>
          <Card>Teste</Card>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ListTripPage;
