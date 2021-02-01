import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 auto;
    border: 1px solid red;
    width: 300px;

`

class Users extends React.Component{
    render(){
        const showAllUsers = this.props.showAllUsers.map((user, index) =>{
            return(
                <li><p key={user.id} onClick={this.props.deleteUser}>{user.name}</p> <button >X</button></li> 
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