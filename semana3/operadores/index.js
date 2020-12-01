/* Exercício de Interpretação */

// 1 - a) false
//1 - b) false
//1 - c) true
//1 - d) boolean

//2 - a) undefined
//2 - b) null
//2 - c) 11
//2 - d) 3
//2 - e) [3,19,5,6,7,8,9,10,11,12,13]
//2 - f) 9

/* Exercicios de escrita de código */
//Exercício 01
let idadeUsuario = prompt('Qual a sua idade?')
let idadeAmigo = prompt('Qual a idade do seu melhor amigo(a)?')
let maiorIdade = idadeUsuario > idadeAmigo 
let quemEMaisVelho = prompt('Sua idade é maior do que a do seu amigo(a)?') 
alert(maiorIdade)
let diferencaIdade = idadeUsuario - idadeAmigo
console.log(`A diferença de idade entre você e seu amigo é de ${diferencaIdade} anos`) 

//Exercício 2
let numeroPar = prompt('Digite um número par')
let verificarNumeroPar = Number(numeroPar) % 2
console.log(verificarNumeroPar)

//Todos os números pares o resultado é igual a zero
//Quando digitamos um número impar o resultado é 1

//Exercício 3
let listaDeTarefas = []
let tarefa1 = prompt('Digite uma tarefa a ser executado')
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt('Digite outra tarefa a ser executado')
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt('Digite mais uma tarefa a ser executado')
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
let tarefaExecutado = Number(prompt('Digite o indice da tarefa que você concluiu'))
listaDeTarefas.splice(tarefaExecutado, tarefaExecutado)
console.log(listaDeTarefas) 

//Exercicio 4
let nomeDoUsuario = prompt('Qual é o seu nome?')
let emailDoUsuario = prompt('Qual o seu email')
alert(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo ${nomeDoUsuario}`) 

//Desafios  1

//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
const conversaoFehrenheitParaKelvin = ((77 - 32) * (5/9)) + 273.15
const conversaoCelcsiusParaFahenheit = (80 * (9/5)) + 32
const conversaoCelcsiusParaKelvin = 80 + 273.15
console.log( `A conversão de 77º F em kelvin ${conversaoFehrenheitParaKelvin}k`)
//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
console.log( `A conversão de 80ºC em Fahrenheit ${conversaoCelcsiusParaFahenheit}F`)
//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
console.log(`A conversão de 30ºC para kelvin é ${conversaoCelcsiusParaKelvin}K e para Fahenheit ${conversaoCelcsiusParaFahenheit}F`)

//Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
let temperatura = Number(prompt('Digite uma temperatura em graus Celsius'))
const conversaoFehrenheitParaKelvin = ((temperatura - 32) * (5/9)) + 273.15
const conversaoCelcsiusParaFahenheit = (temperatura * (9/5)) + 32
const conversaoCelcsiusParaKelvin = temperatura + 273.15
console.log( `A conversão de ${temperatura} F em kelvin ${conversaoFehrenheitParaKelvin}k`)
//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
console.log( `A conversão de ${temperatura} em Fahrenheit ${conversaoCelcsiusParaFahenheit}F`)
//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
console.log(`A conversão de ${temperatura} para kelvin é ${conversaoCelcsiusParaKelvin}K e para Fahenheit ${conversaoCelcsiusParaFahenheit}F`) 

//Desafio 2
const custoQuilowatt = 0.05
const desconto = 0.85
let consumo = Number(prompt('Digite seu consumo de energia'))
console.log(`O valor a ser pago é de R$ ${consumo * custoQuilowatt},00 `)
console.log(`O valor a ser pago com desconto é de R$ ${(consumo * custoQuilowatt) * desconto} `) 


//Desafio 03
let libra = 20
let onca = 10.5
let milha = 100
let pe = 50
let galao = 103.56
let xicara = 450
const converteLibraParaQuilo = libra / 2.205
const converteOncaParaQuilo = onca /35.274
const converteMilhaParaMetro = milha * 1609.34
const convertePeParaMetro = pe / 3.281
const converteGalaoParaLitro = galao * 3.785
const converteXicaraParaLitro = xicara / 3.52
console.log(`20lb equivalem a ${converteLibraParaQuilo} kg`)
console.log(`10.5oz equivalem a ${converteOncaParaQuilo} kg`)
console.log(`100mi equivalem a ${converteMilhaParaMetro} metros`)
console.log(`50ft equivalem a ${convertePeParaMetro} metros`)
console.log(`103.56gl equivalem a ${converteGalaoParaLitro} litros`)
console.log(`450xc equivalem a ${converteXicaraParaLitro} litros`)

let distanciaUsuario = Number(prompt('Digite a distancia em milhas para converter em metros'))
milha = distanciaUsuario
console.log(`A distancia ${distanciaUsuario} equivale a ${converteMilhaParaMetro} metros `)


