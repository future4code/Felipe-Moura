import React from 'react'
import Titulo from './styles/Titulo'
import {Inputs, Selections} from './styles/Inputs'
import Question from './styles/Perguntas'
import Conteudo from './styles/Conteudo'

export default class Etapa1 extends React.Component{
    render(){
        
    return(
        <Conteudo>
            <Titulo>Etapa 1 - Dados Gerais </Titulo>
            <Question>1. Qual o seu Nome?</Question>
            <Inputs type="text"/>

            <Question>2. Qual a sua idade?</Question>
            <Inputs type="number"/>

            <Question>3. Qual o seu Email?</Question>
            <Inputs type="email"/>

            <Question>4. Qual a sua escolaridade</Question>
            <Selections>
                <option value="ensinoMedioCompleto">Ensino Medio Completo</option>
                <option value="ensinoMedioIncompleto">Ensino Medio Incompleto</option>
                <option value="ensinoSuperiorCompleto">Ensino Superior Completo</option>
                <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
            </Selections>
            
        </Conteudo>
    )
    }
}