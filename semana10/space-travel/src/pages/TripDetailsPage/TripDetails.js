import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToApplication } from '../../routes/Coordinator'
import { Container } from '../../styles/default'


const TripDetail = () => {
    const history = useHistory()
    return(
        <Container>
            <h1> Teste</h1>

            <button onClick={() => goToApplication(history)}>Se inscreva</button>
        </Container>
    )
}

export default TripDetail