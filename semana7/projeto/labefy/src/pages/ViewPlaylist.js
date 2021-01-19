import React from "react";
import { baseURL, axiosHeaders } from "../params";
import axios from "axios";
import { AddMusic } from "./AddMusic";
import { ShowAllMusic } from "./ShowAllMusic";

export class ViewPlaylist extends React.Component {
  state = {
    list: [],
    showAddMusic: false,
    showMusics: false,
    playlistName: "",
    playlistId: "",
  };
  componentDidMount() {
    this.getPlaylist();
  }
  componentDidUpdate() {
    this.getPlaylist();
  }
  getPlaylist = async () => {
    try {
      const response = await axios.get(baseURL, axiosHeaders);
      // console.log(response.data.result.list)
      this.setState({
        list: response.data.result.list,
      });
      // console.log(this.state.list)
    } catch (err) {
      console.log(err);
    }
  };

  deletePlaylist = (id) => {
    axios
      .delete(`${baseURL}/${id}`, axiosHeaders)
      .then((res) => {
        console.log(res);
        this.getPlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addMusic = (name, id) => {
    axios
      .get(`${baseURL}/search?name=${name}`, axiosHeaders)
      .then((res) => {
        // console.log(res);
        this.setState({
          showAddMusic: !this.state.showAddMusic,
          playlistName: name,
          playlistId: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showMusic = (name, id) => {
    axios
      .get(`${baseURL}/search?name=${name}`, axiosHeaders)
      .then((res) => {
        // console.log(res);
        this.setState({
          showMusics: !this.state.showMusics,
          playlistName: name,
          playlistId: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  render() {
    const playlist = this.state.list.map((playlist) => {
      return (
        <span>
          <li key={playlist.id}>
            {playlist.name}
            <button
              onClick={() => {
                this.addMusic(playlist.name, playlist.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.deletePlaylist(playlist.id);
              }}
            >
              X
            </button>
            <button
              onClick={() => {
                this.showMusic(playlist.name, playlist.id);
              }}
            >
              Ver Musicas
            </button>
          </li>
        </span>
      );
    });
    return (
      <div>
        <ul>{playlist}</ul>
        {this.state.showAddMusic && (
          <AddMusic
            addMusicToPlaylist={this.state.playlistName}
            playlistId={this.state.playlistId}
          />
        )}
        {this.state.showMusics && (
          <ShowAllMusic
            playlistName={this.state.playlistName}
            playlistId={this.state.playlistId}
          />
        )}
      </div>
    );
  }
}
