import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://imgur.com/o7BqQfe.jpg" 
          nome="Felipe Moura" 
          descricao="Oi, sou o Felipe tenho 26 anos sou formando em Engenharia Civil pela Universidade Paulista, meu primeiro contato com programação foi atravérs na semana omnistack da Rocketseat e desde lá venho estudando cada vez mais e curtindo muito o assunto "
        />
        <CardPequeno 
          cidade="Franco da Rocha"
          estado="São Paulo"
          tel="(11) 98765-4321"
          email="felipemimoura@labenu.com"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://imgur.com/ZGEZQU4.jpg" 
          nome="StarCenter Soluções em Clinamatização" 
          descricao="Analista de Planejamento com foco em negociações B2B" 
        />
        
        <CardGrande 
          imagem="https://imgur.com/QZmde2N.jpg" 
          nome="Construtora Ohana" 
          descricao="Coordenador de Planejamento com foco no cliente interno." 
        />
        <CardGrande 
          imagem="https://imgur.com/zew5VYl.png" 
          nome="CompactCar" 
          descricao="Assistente de Planejamento." 
        />
      </div>
      <div className="page-section-container">
        <h2>Formações</h2>
        <CardGrande 
          imagem="https://imgur.com/vL6UXY5.png" 
          nome="Labenu" 
          descricao="Desenvolvedor FullStack" 
        />
        
        <CardGrande 
          imagem="https://imgur.com/zvxBbU2.png" 
          nome="Formação FrontEnd Alura" 
          descricao="Formação Básica sobre FrontEnd." 
        />
        <CardGrande 
          imagem="https://imgur.com/VzcWfMx.jpg" 
          nome="IGTI" 
          descricao="Desenvolvimento FullStack." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
         
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
