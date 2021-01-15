import React from "react";
import Axios from 'axios'
import { baseURL, axiosHeaders } from "../params";
import axios from "axios";

export class CreatePlaylist extends React.Component {
  state = {
    playlistName: "",
  };

  handleInput = (e) => {
    this.setState({
      playlistName: e.target.value,
    });
  };

  createPlaylist = () =>{
    const body = {name: this.state.playlistName}

    axios.post(baseURL, body, axiosHeaders)
    .then((res) => {
        alert('Playlist Criada com sucesso')
        this.setState({
            playlistName: ""
        })
    })
    .catch((err)=>{
        alert('Erro ao criar a playlist')
    })
  }

  render() {
    return (
      <div>
        <h1>Vamos lá criar suas Playlist</h1>

        <p>Defina um nome para sua playlists</p>
        <input
          placeholder="Nome da Playlist"
          value={this.state.playlistName}
          onChange={this.handleInput}
        ></input>
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}
