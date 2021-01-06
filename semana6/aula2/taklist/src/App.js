import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas:[],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    const taskLista = this.state.tarefas
    localStorage.setItem("tasks", JSON.stringify(taskLista))
    
  }

  componentDidMount() {
     const taskString = localStorage.getItem("tasks")
     const taskObj = JSON.parse(taskString)
     
      if(taskObj){
        this.setState({
          tarefas: [...taskObj]
        })
      }
   }

  

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const newTask = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const newTaskList = [...this.state.tarefas, newTask];
    this.setState({ tarefas: newTaskList });
  };

  selectTarefa = (id) => {
    const taskList = this.state.tarefas.map((task) =>{
      if(id === task.id){
        const newTask = {
          ...task,
          completa: !task.completa
        }
        return newTask
      }else {
        return task
      }
    })

    this.setState({tarefas: taskList})
    
  };

  onChangeFilter = (event) => {
      switch(event.target.value){
        case "pendentes":
          return this.setState({filtro: "pendentes"});
        case "completas":
          return this.setState({filtro: "completas"})
        default:
          return this.setState({filtro: ""})
      }
    

  }
  ;

  render(){
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
