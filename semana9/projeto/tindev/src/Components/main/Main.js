import React, { useEffect, useState } from "react";
import Pessoa from "../pessoa/Pessoa";
import { ButtonContainer, Content } from "./MainStyle";
import axios from 'axios'
import {baseURL, choosePerson} from '../../params'

function Main() {
  const [pessoa, setPessoas] = useState({})

 

  const getPessoa = () =>{
    axios.get(`${baseURL}`)
    .then((res) =>{
      setPessoas(res.data.profile)
    
      
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const likePeople = (id, age, name, photo) =>{
    const body = {
      "id": id,
      "age": age,
      "name": name,
      "photo": photo,
      "choice": true
    }
    axios.post(choosePerson, body)
      .then((res) =>{
        console.log(res.data)
      })
      .catch((err) =>{
        console.log(err.message)
      })
  }

  useEffect(() =>{
      getPessoa()
  },[])


    const handleDislike = () =>{
      getPessoa()
    }

    const handleLike = (id,age, name, photo) =>{
      likePeople(id, age,name, photo)
      getPessoa()
    }

  return (
    <Content>
      <Pessoa photo={pessoa.photo} name={pessoa.name} age={pessoa.age} bio={pessoa.bio}/>
      <ButtonContainer>
        <button onClick={handleDislike}>Passo</button>
        <button onClick={() => {handleLike(pessoa.id, pessoa.age, pessoa.name, pessoa.photo)}}>Curtir</button>
      </ButtonContainer>
    </Content>
  );
}

export default Main;
