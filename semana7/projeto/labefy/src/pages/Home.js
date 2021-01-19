import React from 'react'
import {Main} from './Main'
import {CreatePlaylist} from './CreatePlaylist'

export class Home extends React.Component{
    state ={
        mainPage: true
    }

    handlePage = () => {
        this.setState({
            mainPage: !this.state.mainPage
        })
    }
    
    render(){
        return(
            <div>
                {this.state.mainPage ? <Main /> : <CreatePlaylist />}

                <button onClick={this.handlePage}>Começar</button>

            </div>
        )
    }
}