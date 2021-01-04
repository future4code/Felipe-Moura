
import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'

const Container = styled.div`
  width: 670px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-itens: center
` 

const Button = styled.button`
  margin: 2vh auto;
  padding: 2vh;
  width: 50%;
`

export default class App extends React.Component{

  state = {
    etapa: 1
  }

  proximaEtapa = () => {
    let etapa = this.state.etapa
    etapa++

    this.setState({etapa: etapa})
  }

  


  render(){
    const renderizaTela = () =>{
      switch(this.state.etapa){
        case 1:
          return <Etapa1/>
        case 2:
          return <Etapa2/>
        case 3:
          return <Etapa3/>
        case 4:
          return <Final/>
        default:
          return <Etapa1 />
      }
    }
    return(
      <Container >
        {renderizaTela()}
        <Button onClick={this.proximaEtapa}>Proxima Etapa</Button>
      </Container>
    )
  }
}


