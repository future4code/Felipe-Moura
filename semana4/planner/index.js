function addTask(){
  const tarefa = document.getElementById('tarefa')
  const diaDaSemana = document.getElementById('dias-semana')
  let diaDaTarefa = diaDaSemana.value
  let tarefaValor = tarefa.value
  let adicionaTarefa = document.getElementById(`${diaDaTarefa}`)

  if(tarefaValor){
    adicionaTarefa.innerHTML += `<p class='to-do'>${tarefaValor} </p> `
  }else{
    alert('Insira uma tarefa')
  }
  tarefa.value = ''
}



