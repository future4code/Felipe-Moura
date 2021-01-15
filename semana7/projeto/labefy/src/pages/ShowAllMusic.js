import React from "react";
import axios from "axios";
import { axiosHeaders, baseURL } from "../params";

export class ShowAllMusic extends React.Component {
  state = {
    allMusic: [],
    playlistId: this.props.playlistId,
    playlistName: this.props.playlistName,
  };
//   componentDidUpdate() {
//     this.getAllMusic();
//   }

  getAllMusic = () => {
    axios
      .get(`${baseURL}/${this.state.playlistId}/tracks`, axiosHeaders)
      .then((response) => {
        //   console.log(response.data.result.tracks)
        this.setState({
          allMusic: response.data.result.tracks,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const songs = this.state.allMusic.map((music) => {
      return (
          console.log(music)
        // <div>
        //   <p>{music.name}</p>
        //   <p>Artista: {music.artist}</p>
        //   <audio controls>
        //     <source>{music.url}</source>
        //   </audio>
        // </div>
      );
    });

    return (
      <div>
        <h2>{this.state.playlistName}</h2>
        {songs}
      </div>
    );
  }
}
