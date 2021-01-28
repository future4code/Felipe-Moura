import React, { useEffect, useState } from "react";
import { ContainerMatchs, Title, UnorderedList, ListItem, PerfilImagem, InfoPerfil } from "./MatchsStyle";
import axios from "axios";
import { clearMatchs, matchesURL } from "../../params";

function MatchList(props) {
  const [matches, setMatches] = useState([]);
  const getMatchs = () => {
    axios.get(matchesURL).then((res) => {
      setMatches(res.data.matches);
    });
  };

  const cleanMatchs = () => {
      axios.put(clearMatchs)
      .then((res) =>{
            setMatches([])
            props.returnHome()
      })
      .catch((err) =>{
          console.log(err)
      })
  }

  useEffect(() => {
    getMatchs();
  });

  return (
    <ContainerMatchs>
      <Title>Pessoas que você deu Match</Title>
      <UnorderedList>
        {matches.map((match) => {
          return (
            <ListItem key={match.id}>
              <PerfilImagem  src={match.photo}></PerfilImagem>
              <InfoPerfil>

              <p>{match.name} </p>
              <p>{match.age} anos</p>
              </InfoPerfil>
            </ListItem>
          );
        })}
      </UnorderedList>

      <button onClick={cleanMatchs}>Limpar todos</button>
    </ContainerMatchs>
  );
}

export default MatchList;
