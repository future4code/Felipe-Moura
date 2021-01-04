// Respostas Exercicios de interpretação 
// Exercício 1: Será exibido no console o valor de 10 e na linha de baixo vai ser exibido 10 5
// Exercício 2:Será exibido no console os seguintes valor 10 10 10 

//Exercicios Escrita de código
//Exercicio 1
//Exerciocio 1-a
let nome 
//Exerciocio 1-b
let idade
//Exercício 1-c
console.log(typeof nome)
console.log(typeof idade)
//Exercício 1-d
/* Os dois casos resultaram em undefined. Isso ocorreu porque a variavel foi inicializada e porém não foi atribuido um valor para ela. */

//Exercicio 1-e
nome = prompt("Qual é o seu nome ?")
idade = prompt("Qual é a sua idade ?") *

//Exercício 1-f
console.log(typeof nome)
console.log(typeof idade)

//Exericício 1-g
console.log("Olá " + nome + ", você tem " + idade + " anos")

//Exercício 2
 let perguntaUm = prompt('Qual o nome e sobrenome ?')
console.log(perguntaUm)
let perguntaDois = prompt('Qual o seu esporte favorito?')
console.log(perguntaDois)
let perguntaTres = prompt('Qual  o seu estilo de musica favorito?')
console.log(perguntaTres)
let perguntaQuatro = prompt('Qual a sua comida preferida?')
console.log(perguntaQuatro)
let perguntaCinco = prompt('Onde você mora?')
console.log(perguntaCinco) 

//Exercício 3 
let comidasPreferidas = ['churrasco', 'lasanha', 'Tapioca', 'Bolo de chocolate','Frango assado']
console.log(comidasPreferidas)
console.log('Essas são minhas comidas preferidas:')
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaUsuario = prompt('Qual a sua comida preferida?')
comidasPreferidas[2] = comidaUsuario.toLowerCase()
console.log(comidasPreferidas)


//Exercício 4
let perguntas = ['Você mora em São Paulo?', 'Você é estudante da Labenu?', 'Você possui um macbook? ']
let resposta = [true, false]
console.log(perguntas[0], resposta[1])
console.log(perguntas[1], resposta[0])
console.log(perguntas[2], resposta[1])


