import React from "react";
import { ContainerPeople, Image, Paragraph, Name } from "./PessoaStyle";



function Pessoa (props){

      return(
          <ContainerPeople>
              <Image src={props.photo} alt={props.name}></Image>
              <Name>{props.name}, {props.age}</Name>
              <Paragraph>{props.bio}</Paragraph>
          </ContainerPeople>
      )
}

export default Pessoa
