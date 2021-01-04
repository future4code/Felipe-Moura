import React from 'react'

export default class Etapa1 extends React.Component{
    render(){
        
    
    return(
        <div>
            <h1>Etapa 1 - Dados Gerais </h1>
            <p>1. Qual o seu Nome?</p>
            <input type="text"/>

            <p>2. Qual a sua idade?</p>
            <input type="number"/>

            <p>3. Qual o seu Email?</p>
            <input type="email"/>

            <p>4. Qual a sua escolaridade</p>
            <select>
                <option value="ensinoMedioCompleto">Ensino Medio Completo</option>
                <option value="ensinoMedioIncompleto">Ensino Medio Incompleto</option>
                <option value="ensinoSuperiorCompleto">Ensino Superior Completo</option>
                <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
            </select>
            
        </div>
    )
    }
}