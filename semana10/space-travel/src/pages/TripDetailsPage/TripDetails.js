import React from "react";
import { useHistory } from "react-router-dom";
import { goToApplication, goToHome } from "../../routes/Coordinator";
import {
  BackButton,
  Container,
  ContentContainer,
  ContentHeader,
} from "../../styles/default";
import back from "../../images/left-arrow.svg";

const TripDetail = () => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContentHeader>
          <BackButton onClick={() => goToHome(history)} src={back} alt="back" />
          <h1>Teste</h1>
          <div></div>
        </ContentHeader>

        <button onClick={() => goToApplication(history)}>Se inscreva</button>
      </ContentContainer>
    </Container>
  );
};
export default TripDetail;
