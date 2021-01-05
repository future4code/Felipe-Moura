import React from 'react'
import Titulo from './styles/Titulo'
import {Inputs, Selections} from './styles/Inputs'
import Question from './styles/Perguntas'
import Conteudo from './styles/Conteudo'

export default class Etapa3 extends React.Component{
    render(){
        return(
            <Conteudo>
                <Titulo>Etapa 3 - Informações Gerais de Ensino</Titulo>
                <Question>7. Por que você não terminou um curso de Gradução</Question>
                <Inputs type="text"/>

                <Question>8. Você fez algum curso complementar</Question>
                <Selections>
                    <option value="nenhum">nenhum</option>
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="cursoIngles">Curso de Ingles</option>
                </Selections>


            </Conteudo>
        )
    }
}