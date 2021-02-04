import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { baseURL } from "../../params";
import {
  goToApplicationPeople,
  goToCreatePage,
  goToHome,
} from "../../routes/Coordinator";
import {
  BackButton,
  Container,
  ContentContainer,
  ContentHeader,
} from "../../styles/default";
import back from "../../images/left-arrow.svg";
import home from "../../images/home.svg";
import trash from "../../images/trash.png";
import { Card, Content, ImageTrash } from "./ListTripPageStyles";
import axios from "axios";
import { useProtectPage } from "../../hooks/useProtectedPage";


const ListTripPageAdm = () => {
  const [trips, setTrips] = useState([])
  useProtectPage()
 
  useEffect(() => {
    getTrip()

  }, []);
  const getTrip = () =>{
    axios.get(`${baseURL}/trips`)
    .then((res)=>{
      setTrips(res.data.trips)
    })
    .catch((err =>{
      console.log(err)
    }))
  }


  const deleteTrip = (id) => {
    axios
      .delete(`${baseURL}/trips/${id}`)
      .then((res) => {
       getTrip()
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const history = useHistory();

  return (
    <Container>
      <ContentContainer>
        <ContentHeader>
          <BackButton onClick={() => goToHome(history)} src={back} alt="back" />
          <h1>Veja nossas opções de Viagens</h1>

          <BackButton onClick={() => goToHome(history)} src={home} alt="back" />
        </ContentHeader>
       
        <button onClick={() =>goToCreatePage(history)}>Criar viagem</button>
        <Content>
          {trips.map((trip) => {
            return (
              <Card key={trip.id}>
                <h2>{trip.planet}</h2>

                <h3>Nome do Evento: {trip.name}</h3>
                <p>Descrição: {trip.description}</p>
                <p>Duração: {trip.durationInDays} dias</p>

                <button onClick={() => goToApplicationPeople(history, trip.id)}>
                  Ver Candidatos
                </button>
                <ImageTrash
                  onClick={() => deleteTrip(trip.id)}
                  src={trash}
                  alt="delete"
                ></ImageTrash>
              </Card>
            );
          })}
       </Content>
      </ContentContainer>
    </Container>
  );
};

export default ListTripPageAdm;
