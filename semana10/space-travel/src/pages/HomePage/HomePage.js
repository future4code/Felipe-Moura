import React from "react";
import { Container, Title , Paragraph, SubTitle} from "./HomePageStyles";
import {ButtonDefault} from '../../components/Styles/default'

const HomePage = () => {
  return (
    <Container>
      <Title>Bem Vindo a LabeX</Title>
      <Paragraph> Sua próxima viagem espacial está aqui. </Paragraph>
       <SubTitle>Quem é você?</SubTitle>
     
      <div>
         <ButtonDefault>Viajante</ButtonDefault>
        <ButtonDefault>Organizador</ButtonDefault>
     
      </div>
    </Container>
  );
};

export default HomePage;
