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
    ]
  } 

  
  
  
  render() {
    const listaDePost = this.state.informacoesPost.map((postagem) =>{
      return(
        <Post 
        nomeUsuario = {postagem.nomeUsuario}
        fotoUsuario = {postagem.fotoUsuario}
        fotoPost = {postagem.fotoPost}
        
        />
      )
    })
    
    return (
      <div className={'app-container'}>
        {listaDePost}
      </div>
    );
  }
}

export default App;
