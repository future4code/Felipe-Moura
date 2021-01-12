import React from 'react'
import styled from 'styled-components'



const ContainerInputs = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
`;

const Inputs = styled.input`
  padding: 5px;
  width: 25vw;
  display: block;
  margin: 5px;

`
const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  background-color: #0045FF;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  border: none;
  margin: 5px;
  cursor: pointer;

`

class Login extends React.Component {
    render() {
      return (
        
          <ContainerInputs>
            <h1>Lista de Nomes</h1>
              <ContainerForm>
              <label>Nome: </label>
              <Inputs onChange={this.props.onChangeInputName} />
              <label>Email: </label>
              <Inputs onChange={this.props.onChangeInputEmail} />
              <Button onClick={this.props.createUser}>Enviar</Button>
              </ContainerForm>
            
          </ContainerInputs>
     
      );
    }
  }
  
  export default Login;
  