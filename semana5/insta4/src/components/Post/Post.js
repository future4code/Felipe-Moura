import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
  }

  onClickCurtida = () => {
    //Está sendo passada no como propriedade do IconeComContador e escreve no console que curtiu
    if(!this.state.curtido){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      })
    }else{
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      })
    }
  }

  onClickComentario = () => {
    //Abre a caixa de comentario
    this.setState({
      comentando: !this.state.comentando,
    })
  }
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }

  render() {
    let iconeCurtida

    if(!this.state.curtido) {
      iconeCurtida = iconeCoracaoBranco
    } else {
      iconeCurtida = iconeCoracaoPreto
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div>
      <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida} //Trás o icone 
          onClickIcone={this.onClickCurtida} // executada a função 
          valorContador={this.state.numeroCurtidas} //Mista número de curtidas
        />

        <IconeComContador
          icone={iconeComentario} //Trás o icone
          onClickIcone={this.onClickComentario} //executada a função
          valorContador={this.state.numeroComentarios} //Mostra o número de comentario
        />
      </div>
      {componenteComentario}
    </div>

    </div>
  }
}

export default Post