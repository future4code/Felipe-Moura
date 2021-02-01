import React from 'react'
import { Container, Paragraph, SubTitle, Title } from './styles'
import {ButtonDefault} from '../Styles/default'

function Home (){
    return(
        <Container>
            <Title>Bem Vindo a LabeX</Title>
            <Paragraph>
              Sua próxima viagem espacial está aqui.
            </Paragraph>
        
            <SubTitle>Quem é você?</SubTitle>
            <div>
            <ButtonDefault>Viajante</ButtonDefault>

            <ButtonDefault>Organizador</ButtonDefault>
            </div>

        </Container>
    )

}

export default Home