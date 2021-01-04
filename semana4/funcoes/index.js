//Exercícios de interpretação de códigos

//Exercício 1
//A) Vai ser impresso no console o valor de 10 e o valor 20
//B) A função vai ser excutada porém não será exibida nada no console

//Exercício 2
//A) No console vai ser somente dois elementos do array
//B) Seria impresso somente os dois nomes

//Exercicio 3
/* A função metodo recebe um array de números como parâmetro, verifica se os números desses array são pares em casos deles serem pares irá realizar a multiplicação do número por ele mesmo e enviar uma novo array. Um novo nome poderia ser: "potenciaDeNumerosPares".
*/

//Exercicios de escrita de código
//Exercicio 4
/*  function escreveSobreMim(){
 let nome = 'Felipe'
  let idade = 26
  let local = 'São Paulo'
  let profissao = 'Estudante'

  return console.log(`Eu sou o ${nome}, tenho ${idade}, moro em ${local} e sou ${profissao}`)
}

escreveSobreMim() */

// function sobreMim(nome, idade, endereco, simOuNao){
  
//   return console.log(`Eu sou o ${nome}, tenho ${idade}, moro em ${endereco} e ${simOuNao} estudante`)
// }

// let nome = prompt('Digite o seu nome');
// let idade = Number(prompt('Quantos anos você possui?'))
// let endereco = prompt('Qual o seu endereço?')
// let estudante = prompt("Você é estudante?, Responda Sim ou Não").toLowerCase()
// let simOuNao = ""
// console.log(estudante)
// if(estudante === 'sim'){
//   simOuNao = 'sou'
// } else{
//   simOuNao = 'não sou'
// }

// sobreMim(nome, idade, endereco, simOuNao)

//Exercicio 5
//Item A
// function somaDoisNumeros(num1, num2){
//   return num1 + num2
// }
// console.log(somaDoisNumeros(10,12))
// //Item B
// function verificaNumeroMaior(num1, num2){
//   return num1 >= num2
// }
// console.log(verificaNumeroMaior(5, 6))

// //Item C

// function repeteMensagem(mensagem){
//   for(let i = 0; i < 10; i++){
//     console.log(mensagem)
//   }

// }
// console.log(repeteMensagem('Ola Labenu'))

//Exercício 6
const numeros = [10, 23,45,78,90,52,35,67,84,22]
// let tamanhoArray = function(array){
//   return array.length
// }
// console.log(tamanhoArray(numeros))

let numeroPar = (numero) =>{
  if(numero % 2 === 0){
   return true
  }
}

 console.log(numeroPar(10))

// function verificaNumerosPares(array){
//   let quantidadeNumerosPares = []
//   for(let i = 0; i <= array.length; i++){
//     if(array[i] % 2 === 0){
      
//       quantidadeNumerosPares.push(array[i])
//     }
//   }
//    return quantidadeNumerosPares.length
// }
// console.log(verificaNumerosPares(numeros))


function verificaNumerosPares(array){
  let quantidadeNumerosPares = []
  for(let i = 0; i <= array.length; i++){
    if(numeroPar(array[i]) === true)
    quantidadeNumerosPares.push(array[i])

  }
   return quantidadeNumerosPares.length
}
console.log(verificaNumerosPares(numeros))
