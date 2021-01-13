import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    margin: 0 auto;
    border: 1px solid red;
    width: 300px;

`

class Users extends React.Component{
    render(){
        const showAllUsers = this.props.showAllUsers.map((user)=>{
            return user.name
        })

        
        

        return(
            <Container>
                <h1>Lista de usuários</h1>
            </Container>
        )
    }
}

export default Users