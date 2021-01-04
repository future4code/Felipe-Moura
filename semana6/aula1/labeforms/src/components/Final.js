import React from 'react'
import Titulo from './styles/Titulo'

import Question from './styles/Perguntas'
import Conteudo from './styles/Conteudo'

export default class Final extends React.Component{
    render(){
        return(
            <Conteudo>
                <Titulo>O Formulário Acabou</Titulo>
                <Question>Muito Obrigado por Participar! Entraremos em contato!</Question>
            </Conteudo>
        )
    }
}