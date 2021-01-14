import axios from "axios";
import React from "react";
import { baseURL } from "../params";

export default class Home extends React.Component {
  state = {
    films: [],
    filmDescription: "",
    filmeTitle: "",
    filmePersonagens: [],
    personagem:[]
  };

  componentDidMount = () => {
    this.getFilms();
  };

  getFilms = async () => {
    try {
      const response = await axios.get(`${baseURL}/films`);
     
      this.setState({
        films: response.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getFilm = async (e) => {
    try {
      const response = await axios.get(`${baseURL}/films/${e.target.value}`);
      this.setState({
        filmeTitle: response.data.title,
        filmePersonagens: response.data.characters,
        filmDescription: response.data.opening_crawl
        
      });
      this.getPersonagem()
    } catch {}
   
  };

  getPersonagemDetails = async(link) =>{
      try{
          const response = await axios(link)
          
          this.setState({
              personagem:  response.data.name
          })
      }
      catch{}
  }

   getPersonagem = async () =>{
     const personagens = this.state.filmePersonagens.map((personagens) => { 

       return (this.getPersonagemDetails(personagens))
    })  

  }


  render() {
    const films = this.state.films.map((film) => {
        return <option value={film.episode_id}>{film.title}</option>;
    });
    
    const personagens = this.state.personagem.map((personagem) =>{
        // console.log(personagem)
        return(<p>{personagem}</p>)
    })
   

    
    return (
      <div className="App">
        <h1>Star Wars</h1>
        <select onChange={this.getFilm}>{films}</select>
        <h2>{this.state.filmeTitle}</h2>
        <p>{this.state.filmDescription}</p>
        <h3>Personagens</h3>
        
            {personagens}
      
        
      </div>
    );
  }
}
