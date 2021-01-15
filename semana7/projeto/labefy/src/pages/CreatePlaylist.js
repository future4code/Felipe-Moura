import React from "react";
import { baseURL, axiosHeaders } from "../params";
import axios from "axios";
import styled from "styled-components";
import { ViewPlaylist } from "./ViewPlaylist";

const ContainerInput = styled.div`
  border: 1px solid black;
  /* height: 500px; */
`;

export class CreatePlaylist extends React.Component {
  state = {
    playlistName: "",
    listPlaylist: false,
  };

  handleInput = (e) => {
    this.setState({
      playlistName: e.target.value,
    });
  };

  createPlaylist = () => {
    const body = { name: this.state.playlistName };

    axios
      .post(baseURL, body, axiosHeaders)
      .then((res) => {
        alert("Playlist Criada com sucesso");
        this.setState({
          playlistName: "",
        });
      })
      .catch((err) => {
        alert("Erro ao criar a playlist");
      });
  };

  viewPlaylist = () =>{
    this.setState({
        listPlaylist: !this.state.listPlaylist
    })
  }


  render() {
    return (
      <div playlistView={this.state.listPlaylist}>
        <ContainerInput>
          <h1>Vamos lá criar suas Playlist</h1>

          <p>Defina um nome para sua playlists</p>
          <input
            placeholder="Nome da Playlist"
            value={this.state.playlistName}
            onChange={this.handleInput}
          ></input>
        <button onClick={this.createPlaylist}>Criar Playlist</button>
        </ContainerInput>
        {this.state.listPlaylist &&(
            <ViewPlaylist />
        )}


        <button onClick={this.viewPlaylist}>Ver Playlist</button>
      </div>
    );
  }
}
