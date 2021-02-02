import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToDetails, goToHome } from '../../routes/Coordinator'
import { Container } from '../../styles/default'

const ListTripPage = () => {
    const history = useHistory(

    )
    return(
        <Container>
            <button onClick={() => goToHome(history)}>Voltar para Home</button>
            <h1>Veja nossas opções de Viagens</h1>

            <button onClick={() => goToDetails(history)}> Veja Mais</button>
        </Container>
    )
}

export default ListTripPage