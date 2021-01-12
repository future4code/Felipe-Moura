import React from "react";
import styled from "styled-components";
import axios from "axios";

import Login from "./components/Login";
import Users from "./components/Users";

const Container = styled.div`
  border: 1px solid red;
  height: 99vh;
  margin: 0px;
  text-align: center;
`;

class App extends React.Component {
  state = {
    userList: [],
    inputName: "",
    inputEmail: "",
    listUser: false,
  };

  userList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Felipe-Moura-epps",
          },
        }
      )
      .then((resposta) => {
        this.setState({ userList: resposta.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChangeInputName = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };
  onChangeInputEmail = (e) => {
    this.setState({
      inputEmail: e.target.value,
    });
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Felipe-Moura-Epps",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // this.userList();
        alert('Usuário Criado com Sucesso')
        // console.log(body)
        // console.log(this.state.userList)
      })
      .catch((err) => {
        console.log(err.message);
        console.log(body)
      });
  };

  showUsers = () => {
    this.setState({
      listUser: !this.state.listUser,
    });
    
  };
  render() {
    return (
      <Container>
        {this.state.listUser ? (
          <Users showAllUsers={this.userList} />
        ) : (
          <Login
            onChangeInputName={this.onChangeInputName}
            onChangeInputEmail={this.onChangeInputEmail}
            createUser={this.createUser}
          />
        )}
        <button onClick={this.showUsers}>Mostrar usuários</button>
      </Container>
    );
  }
}

export default App;
