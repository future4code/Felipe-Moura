import React from 'react'
import Titulo from './styles/Titulo'
import {Inputs} from './styles/Inputs'
import Question from './styles/Perguntas'
import Conteudo from './styles/Conteudo'

export default class Etapa2 extends React.Component{
    render(){
        return (
            <Conteudo>
                <Titulo>Etapa 2 - Informações de Ensino</Titulo>
                <Question>5. Qual Curso?</Question>
                <Inputs type="text"/>
                <Question>6. Qual unidade do Cursos</Question>
                <Inputs type="text" />
                
            </Conteudo>
        )
    }
}