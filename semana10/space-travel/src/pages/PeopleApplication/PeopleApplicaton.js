import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { goToBack } from "../../routes/Coordinator";
import {
  BackButton,
  Container,
  ContentContainer,
  ContentHeader,
} from "../../styles/default";
import back from "../../images/left-arrow.svg";
import { baseURL } from "../../params";
import axios from "axios";
import { useProtectPage } from "../../hooks/useProtectedPage";
import { Content } from "../ListTripsPage/ListTripPageStyles";

function PeopleApplication() {
  const [candidate, setCandidate] = useState([]);
  useProtectPage();

  const history = useHistory();
  const pathParams = useParams();

  useEffect(() => {
    getTripDetail();
  });

  const getTripDetail = () => {
    axios
      .get(`${baseURL}/trip/${pathParams.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCandidate(res.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleApprove = (id) => {
    const body = {
      approve: true,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-moura-epps/trips/${pathParams.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
        console.log(id);
      });
  };
  const handleNotApprove = (id) => {
    const body = {
      approve: false,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe-moura-epps/trips/${pathParams.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <Container>
      <ContentContainer>
        <ContentHeader>
          <BackButton onClick={() => goToBack(history)} src={back} alt="back" />
          <h1>Lista de Pessoa com Interesse na viagem</h1>

          <div></div>
        </ContentHeader>
        <Content>
          <ul>
            {candidate.map((candidate) => {
              return (
                <li key={candidate.id}>
                  <p>{candidate.name}</p>
                  <p>{candidate.id}</p>
                  <p>Devo ir porque: {candidate.applicationText}</p>
                  <button onClick={() => handleApprove(candidate.id)}>
                    Aprovar
                  </button>
                  <button onClick={() => handleNotApprove(candidate.id)}>
                    Não Aprovar
                  </button>
                </li>
              );
            })}
          </ul>
        </Content>
      </ContentContainer>
    </Container>
  );
}

export default PeopleApplication;
