const tarefa = document.getElementById('tarefa')
const diaDaSemana = document.getElementById('dias-semana')
function addTask(){
  let diaDaTarefa = diaDaSemana.value
  let adicionaTarefa = document.getElementById(diaDaTarefa)
  let tarefaValor = tarefa.value
  if(tarefaValor){
    adicionaTarefa.innerHTML += `<p class='to-do'>${tarefaValor} </p> `
  }else{
    alert('Insira uma tarefa')
  }
  tarefa.value = ''
}

const listaDaSemana = document.querySelector('#lista-da-semana')
listaDaSemana.addEventListener('click', listaConcluida)

function listaConcluida(e){
  if(e.target.classList.contains('to-do')){
    if(confirm('Você concluiu essa atividade?')){
      e.target.classList.toggle('risked-item')
    }
  }
  
}

