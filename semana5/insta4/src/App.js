import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Felipe'}
          fotoUsuario={'https://picsum.photos/200/300'}
          fotoPost={'https://picsum.photos/210/150'}
        />
        <Post
          nomeUsuario={'Labenu_'}
          fotoUsuario={'https://picsum.photos/55/50'}
          fotoPost={'https://picsum.photos/240/150'}
        />
      </div>
    );
  }
}

export default App;
