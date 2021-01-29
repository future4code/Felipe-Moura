import React, { useEffect, useState } from "react";
import Pessoa from "../pessoa/Pessoa";
import { ButtonContainer, ButtonLike, Content } from "./MainStyle";
import axios from "axios";
import { baseURL, choosePerson } from "../../params";

function Main() {
  const [people, setPeoples] = useState({});

  const getPessoa = () => {
    axios
      .get(`${baseURL}`)
      .then((res) => {
        setPeoples(res.data.profile);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const likePeople = (id, age, name, photo) => {
    const body = {
      id: id,
      age: age,
      name: name,
      photo: photo,
      choice: true,
    };
    axios
      .post(choosePerson, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPessoa();
  }, []);

  const handleDislike = () => {
    getPessoa();
  };

  const handleLike = (id, age, name, photo) => {
    likePeople(id, age, name, photo);
    getPessoa();
  };

  return (
    <Content>
      <Pessoa
        photo={people.photo}
        name={people.name}
        age={people.age}
        bio={people.bio}
      />
      <ButtonContainer>
        <ButtonLike onClick={handleDislike}>
          <img
            width="60px"
            src="https://cdn.icon-icons.com/icons2/1661/PNG/512/12140brokenheart_110382.png"
            alt="coração não curti"
          ></img>
        </ButtonLike>
        <ButtonLike
          onClick={() => {
            handleLike(people.id, people.age, people.name, people.photo);
          }}
        >
          <img
            width="60px"
            src="https://cdn.icon-icons.com/icons2/1661/PNG/512/12145greenheart_110360.png"
            alt="coração curtir"
          ></img>
        </ButtonLike>
      </ButtonContainer>
    </Content>
  );
}

export default Main;
