const domingo = document.getElementById('domingo')
const segunda = document.getElementById('segunda')
const terca = document.getElementById('terca')
const quarta = document.getElementById('quarta')
const quinta = document.getElementById('quinta')
const sexta = document.getElementById('sexta')
const sabado = document.getElementById('sabado')


function addTask(){
  const tarefa = document.getElementById('tarefa')
  const diaDaSemana = document.getElementById('dias-semana')
  let tarafaValor = tarefa.value
  let diaDaTarefa = diaDaSemana.value
 

  switch(diaDaTarefa){
    case 'domingo':
      domingo.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
    case 'segunda':
      segunda.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
    case 'terca':
      terca.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
    case 'quarta':
      quarta.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
    case 'quinta':
      quinta.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
    case 'sexta':
      sexta.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
    case 'sabado':
      sabado.innerHTML += `<ul><li>${tarafaValor}</li></ul>`
      tarefa.value = ''
    break
  }
}

