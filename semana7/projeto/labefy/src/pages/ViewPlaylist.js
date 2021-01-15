import React from 'react'
import {baseURL, axiosHeaders} from '../params'
import axios from 'axios'

export class ViewPlaylist extends React.Component{
    state = {
        list: []
    }
    componentDidMount(){
        this.getPlaylist()
    }
    componentDidUpdate(){
        this.getPlaylist()
    }
    getPlaylist =  async () =>{
        try{
            const response = await axios.get(baseURL, axiosHeaders)
            // console.log(response.data.result.list)
            this.setState({
                list: response.data.result.list
            })
            // console.log(this.state.list)
        }
        catch(err){
            console.log(err)
        }
    }

    deletePlaylist = (id) =>{
        axios.delete(`${baseURL}/${id}`, axiosHeaders)
            .then((res) => {
                   console.log(res) 
                   this.getPlaylist()
            })
            .catch((err) =>{
                console.log(err)
            })
    }
    render(){
        const playlist = this.state.list.map((playlist) =>{
            return(
                <li key={playlist.id}>{playlist.name} 
                    <button onClick={() => {this.deletePlaylist(playlist.id)}}> X</button>
                </li>
            )
        })
        return(
            <ul>{playlist}</ul>
        )
    }
}