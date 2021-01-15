import axios from 'axios'
import React from 'react'
import { axiosHeaders, baseURL } from '../params'


export class AddMusic extends React.Component{
    state ={
        music: "",
        artist: "",
        url: "",
        newMusic: [],
        playlistId: this.props.playlistId

    }
    handleMusicName = (e) =>{
        this.setState({
            music: e.target.value
        })
    }
    handleArtistName = (e) =>{
        this.setState({
            artist: e.target.value
        })
    }
    handleUrl = (e) =>{
        this.setState({
            url: e.target.value
        })
    }
    addMusic = () =>{
        const body ={
            name: this.state.music,
            artist: this.state.artist,
            url: this.state.url
        }
        const idPlaylist = this.state.playlistId
            axios.post(`${baseURL}/${idPlaylist}/tracks`, body, axiosHeaders)
            .then((res) =>{
                console.log(res)
                alert('Musica Cadastrada com Sucesso')
                this.setState({
                    music: '',
                    artist: '',
                    url: ''
                })


            })
            .catch((err)=>{
                console.log(err)
            })

    }

    render(){
        return(
            <div>
                <h1>{this.props.addMusicToPlaylist}</h1>
                <p>Nome da Musica</p> <input placeholder="Digite o nome da Musica" onChange={this.handleMusicName} value={this.state.music}></input>
                <p>Nome do Artista</p> <input placeholder="Digite o nome do artista" onChange={this.handleArtistName} value={this.state.artist}></input>
                <p>url</p> <input placeholder="Digite a url" onChange={this.handleUrl} value={this.state.url}></input>
                <button onClick={this.addMusic}>Cadastrar</button>

            </div>
        )
    }
}