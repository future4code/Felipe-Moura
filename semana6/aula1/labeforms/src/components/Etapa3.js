import React from 'react'

export default class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <p>7. Por que você não terminou um curso de Gradução</p>
                <input type="text"/>

                <p>8. Você fez algum curso complementar</p>
                <select>
                    <option value="nenhum">nenhum</option>
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="cursoIngles">Curso de Ingles</option>
                </select>


            </div>
        )
    }
}