import React from 'react';
import styled from 'styled-components'

import './App.css';
import Post from './components/Post/Post';

const InputsPersonalizados = styled.input`
  margin: 10px;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid #aaa;
  outline: none;
  width: 300px;
`
const BotaoPostagem = styled.button`
  width: 100px;
  border: none;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #eee

`
class App extends React.Component {
  state = {
    informacoesPost:[
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Felipe",
        fotoUsuario: "https://picsum.photos/200/300",
        fotoPost: "https://picsum.photos/220/150"
      } ,
      {
        nomeUsuario: "Labenu_",
        fotoUsuario: "https://picsum.photos/55/50",
        fotoPost: "https://picsum.photos/240/150"
      },
    ],
    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputLink: "",
  } 

  adicionaPostagem  = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputLink
    }

    const novoPost = [novaPostagem, ...this.state.informacoesPost]

    this.setState({informacoesPost: novoPost})
  }

  onChangeValorInputNome = (event) =>{
    this.setState({valorInputNome: event.target.value}) 
  }

  onChangeValorInputFotoUsuario= (event)=>{
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeValorInputLink = (event)=>{
    this.setState({valorInputLink: event.target.value})
  }
  
  render() {
    const listaDePost = this.state.informacoesPost.map((postagem) =>{
      return(
        <div key={postagem.nomeUsuario}>
        <Post 
        nomeUsuario = {postagem.nomeUsuario}
        fotoUsuario = {postagem.fotoUsuario}
        fotoPost = {postagem.fotoPost}
        />
        </div>
      )
    })
    
    return (
      <div className={'app-container'}>
        <div>
          <InputsPersonalizados
            onChange={this.onChangeValorInputNome}
            value={this.state.valorInputNome}
            placeholder={"Nome Usuario"}
          ></InputsPersonalizados>
          <InputsPersonalizados
          onChange={this.onChangeValorInputFotoUsuario}
            value={this.state.valorInputFotoUsuario}
            placeholder={"Foto Perfil Usuario"}
          ></InputsPersonalizados>
          <InputsPersonalizados
          onChange={this.onChangeValorInputLink}
            value={this.state.valorInputLink}
            placeholder={"Endereço da postagem"}
          ></InputsPersonalizados>
          <BotaoPostagem onClick={this.adicionaPostagem}>Postar</BotaoPostagem>
        </div>
        {listaDePost}
      </div>
    );
  }
}

export default App;
