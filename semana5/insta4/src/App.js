import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
        <input
          onChange={this.onChangeValorInputNome}
          value={this.state.valorInputNome}
          placeholder={"Nome Usuario"}
        />
        <input
         onChange={this.onChangeValorInputFotoUsuario}
          value={this.state.valorInputFotoUsuario}
          placeholder={"Foto Perfil Usuario"}
        />
        <input
         onChange={this.onChangeValorInputLink}
          value={this.state.valorInputLink}
          placeholder={"Endereço da postagem"}
        />
        <button onClick={this.adicionaPostagem}>Postar</button>
        {listaDePost}
      </div>
    );
  }
}

export default App;
