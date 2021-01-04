
import React from 'react'
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'


export default class App extends React.Component{

  state = {
    etapa: 1
  }

  proximaEtapa = () => {
    let proxima = this.state.etapa
    proxima++

    this.setState({etapa: proxima})
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
      <div class='Container'>
        {renderizaTela()}
        <button onClick={this.proximaEtapa}>Proxima Etapa</button>
      </div>
    )
  }
}


