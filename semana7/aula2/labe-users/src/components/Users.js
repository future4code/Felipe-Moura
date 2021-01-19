import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 auto;
    border: 1px solid red;
    width: 300px;

`

class Users extends React.Component{
    render(){
        const showAllUsers = this.props.showAllUsers.map((user) =>{
            return(
                <li key={user.id}><p>{user.name}</p> <button onClick={this.props.deleteUser}>X</button></li> 
            )
        })
        
        return(
            <Container>
                <h1>Lista de usuários</h1>
                <ul>
                    {showAllUsers}
                </ul>
            </Container>
        )
    }
}

export default Users