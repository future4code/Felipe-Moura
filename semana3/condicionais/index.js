/* Exercício Interpretação de Código */
//Exercício 1
/* O código pede para o usuário digitar um número,
 após a digitação desse número e o converte o que foi digitado  para um número,
 realiza a comparação para saber se o numero é par ou impar. 
 Caso seja par mostra a mensagem "Passou no teste" e caso seja ímpar exibe a mensagem "Não passou no teste" */

 //Exercício 2
 //A) O codigo serve para mostrar o preço de uma terminada fruta e caso ela não esteja no catálogo  possui um preço  padrão de 5 reais
 //B) A mensagem seria "O preço da fruta maça é R$ 2.25"
 //C) Seria de R$ 5
 //Exercício 3
 //A) Está pedindo para o usuário digitar um número e o convertando para número, pois por padrão o conteúdo do prompt é uma string
 //B) Vai aparecer a mensagem "Esse número passou no teste"
 //C) Vai aparecer um erro no console pois a variável mensagem está dentro do escopo da condição if. Para que ela fosse acessível deveria estar em escopo global.

 /* Exercícios de escrita de código */
 //Exercício 4
/*  let idadeUsuario = Number(prompt('Digite a sua idade'))
 if(idadeUsuario >= 18){
   console.log('Você pode dirigir')
 }else{
   console.log('Você não pode dirigir')
 } */

 //Exercício 5 
/* let turnoDeEstudo = prompt('Qual o turno que você estuda? Digite M para manhã, V para Vespertino e N para Noturno').toLowerCase()
if(turnoDeEstudo === 'm'){
  console.log('Bom dia !')
}else if(turnoDeEstudo === 'v'){
  console.log('Boa tarde!')
}else if( turnoDeEstudo === 'n'){
  console.log('Boa noite!')
}else{
  console.log('Desculpa não consegui indentificar o horário que você estuda ')
}
 */
//Exercicio 6
/* let turnoDeEstudo = prompt('Qual o turno que você estuda? Digite M para manhã, V para Vespertino e N para Noturno').toLowerCase()
switch(turnoDeEstudo){
  case 'm': 
    console.log('Bom dia')
    break;
  case 'v':
    console.log('Boa tarde !')
    break;
  case 'n':
    console.log('Boa Noite!')
    break
  default:
    console.log('Desculpa não consegui indentificar o horário que você estuda')
}  */

//Exercício 7
/* let generoFilme = prompt('Digite o genero do filme').toLowerCase()
let valorIngresso = Number(prompt('Digite o valor do Ingresso'))

if(generoFilme === 'fantasia' && valorIngresso < 15){
  console.log('Bom Filme')
}else{
  console.log('Escolha outro filme :(')
} */

/* Resolução dos desafios */
//Desafio 01
/* let generoFilme = prompt('Digite o genero do filme').toLowerCase()
let valorIngresso = Number(prompt('Digite o valor do Ingresso'))

if(generoFilme === 'fantasia' && valorIngresso < 15){
  console.log(`Bom filme`)
  let comparSnack = prompt('Gostaria de comprar qual snack?')
  console.log(`com ${comparSnack}`)
}else{
  console.log('Escolha outro filme :(')
} */

//Desafio 02
let nomeUsuario = prompt('Digite o seu nome: ')
let tipoDeJogo = prompt('Digite o tipo de Jogo (IN para internacional e DO para Nacional)').toLowerCase()
let etapaDoJogo = prompt('Digite a etapa do jogo Semi-Final(SF), Decição de terceiro Lugar(DT) e Final (FI)').toLowerCase()
let digiteACategoria = Number(prompt('Categoria (1), Categoria (2), Categoria(3), Categoria(4)'))
let quantidadeDeIngresso = Number(prompt('Digite a quantidade de Ingressos'))


console.log('------Dados da Compra -----')
console.log(`Nome do Clinte: ${nomeUsuario}`)

switch(tipoDeJogo){
  case 'in':
    console.log(`Tipo do jogo: Internacional`)
    break
  case 'do':
    console.log(`Tipo do jogo: Nacional `)
    break
}
switch(etapaDoJogo){
  case 'sf':
    console.log(`Etapa do Jogo Semi-final`)
    break
  case 'dt':
    console.log(`Disputa de terceiro lugar`)
    break
  case 'fi':
    console.log(`Final do campeonato`)
    break
}

switch(digiteACategoria){
  case 1 :
    console.log(`Categoria : ${digiteACategoria}`)
    break;
  case 2:
    console.log(`Categoaria: ${digiteACategoria}`)
    break
  case 3:
    console.log(`Categoria : ${digiteACategoria}`)
    break
  case 4:
    console.log(`Categoria : ${digiteACategoria}`)
}
console.log(`Quantidade de Ingressos: ${quantidadeDeIngresso} ingressos`)

console.log('------ Valores -----')
let valoresSFCat1 = 1320
let valoresSFCat2 = 880
let valoresSFCat3 = 550
let valoresSFCat4 = 220
let valoresDTCat1 = 660
let valoresDTCat2 = 440
let valoresDTCat3 = 330
let valoresDTCat4 = 170
let valoresFICat1 = 1980
let valoresFICat2 = 1320
let valoresFICat3 = 880
let valoresFICat4 = 330

if(tipoDeJogo === 'do'){
  if(etapaDoJogo === 'sf'){
    switch(digiteACategoria){
      case 1: 
      console.log(`Valor do Ingresso: ${valoresSFCat1}`)
      console.log(`Valor total: ${valoresSFCat1 * quantidadeDeIngresso}`)
      break;
      case 2: 
      console.log(`Valor do Ingresso: ${valoresSFCat2}`)
      console.log(`Valor total: ${valoresSFCat2 * quantidadeDeIngresso}`)
      break;
      case 3: 
      console.log(`Valor do Ingresso: ${valoresSFCat3}`)
      console.log(`Valor total: ${valoresSFCat3 * quantidadeDeIngresso}`)
      break;
      case 4: 
      console.log(`Valor do Ingresso: ${valoresSFCat4}`)
      console.log(`Valor total: ${valoresSFCat4 * quantidadeDeIngresso}`)
      break;
    }
  }else if(etapaDoJogo === 'dt'){
    switch(digiteACategoria){  
      case 1: 
        console.log(`Valor do Ingresso: ${valoresDTCat1}`)
        console.log(`Valor total: ${valoresDTCat1 * quantidadeDeIngresso}`)
      break;
      case 2: 
        console.log(`Valor do Ingresso: ${valoresDTCat2}`)
        console.log(`Valor total: ${valoresDTCat2 * quantidadeDeIngresso}`)
      break;
      case 3: 
        console.log(`Valor do Ingresso: ${valoresDTCat3}`)
        console.log(`Valor total: ${valoresDTCat3 * quantidadeDeIngresso}`)
      break;
      case 4: 
        console.log(`Valor do Ingresso: ${valoresDTCat4}`)
        console.log(`Valor total: ${valoresDTCat4 * quantidadeDeIngresso}`)
    break;
    }
  }else if(etapaDoJogo === 'fi'){
    switch(digiteACategoria){  
      case 1: 
        console.log(`Valor do Ingresso: ${valoresFICat1}`)
        console.log(`Valor total: ${valoresFICat1 * quantidadeDeIngresso}`)
      break;
      case 2: 
        console.log(`Valor do Ingresso: ${valoresFICat2}`)
        console.log(`Valor total: ${valoresFICat2 * quantidadeDeIngresso}`)
      break;
      case 3: 
        console.log(`Valor do Ingresso: ${valoresFICat3}`)
        console.log(`Valor total: ${valoresFICat3 * quantidadeDeIngresso}`)
      break;
      case 4: 
        console.log(`Valor do Ingresso: ${valoresFICat4}`)
        console.log(`Valor total: ${valoresFICat4 * quantidadeDeIngresso}`)
    break;
    }
  }
}
if(tipoDeJogo === 'in'){
  valoresSFCat1 /= 4.10
  valoresSFCat2 /= 4.10
  valoresSFCat3 /= 4.10
  valoresSFCat4 /= 4.10
  valoresDTCat1 /= 4.10
  valoresDTCat2 /= 4.10
  valoresDTCat3 /= 4.10
  valoresDTCat4 /= 4.10
  valoresFICat1 /= 4.10
  valoresFICat2 /= 4.10
  valoresFICat3 /= 4.10
  valoresFICat4 /= 4.10
  if(etapaDoJogo === 'sf'){
    switch(digiteACategoria){
      
      case 1: 
      console.log(`Valor do Ingresso: ${valoresSFCat1}`)
      console.log(`Valor total: ${valoresSFCat1 * quantidadeDeIngresso}`)
      break;
      case 2: 
      console.log(`Valor do Ingresso: ${valoresSFCat2} `)
      console.log(`Valor total: ${valoresSFCat2  * quantidadeDeIngresso}`)
      break;
      case 3: 
      console.log(`Valor do Ingresso: ${valoresSFCat3}`)
      console.log(`Valor total: ${valoresSFCat3 * quantidadeDeIngresso}`)
      break;
      case 4: 
      console.log(`Valor do Ingresso: ${valoresSFCat4}`)
      console.log(`Valor total: ${valoresSFCat4 * quantidadeDeIngresso}`)
      break;
    }
  }else if(etapaDoJogo === 'dt'){
    switch(digiteACategoria){  
      case 1: 
        console.log(`Valor do Ingresso: ${valoresDTCat1}`)
        console.log(`Valor total: ${valoresDTCat1 * quantidadeDeIngresso}`)
      break;
      case 2: 
        console.log(`Valor do Ingresso: ${valoresDTCat2}`)
        console.log(`Valor total: ${valoresDTCat2 * quantidadeDeIngresso}`)
      break;
      case 3: 
        console.log(`Valor do Ingresso: ${valoresDTCat3}`)
        console.log(`Valor total: ${valoresDTCat3 * quantidadeDeIngresso}`)
      break;
      case 4: 
        console.log(`Valor do Ingresso: ${valoresDTCat4}`)
        console.log(`Valor total: ${valoresDTCat4 * quantidadeDeIngresso}`)
    break;
    }
  }else if(etapaDoJogo === 'fi'){
    switch(digiteACategoria){  
      case 1: 
        console.log(`Valor do Ingresso: ${valoresFICat1}`)
        console.log(`Valor total: ${valoresFICat1 * quantidadeDeIngresso}`)
      break;
      case 2: 
        console.log(`Valor do Ingresso: ${valoresFICat2}`)
        console.log(`Valor total: ${valoresFICat2 * quantidadeDeIngresso}`)
      break;
      case 3: 
        console.log(`Valor do Ingresso: ${valoresFICat3}`)
        console.log(`Valor total: ${valoresFICat3 * quantidadeDeIngresso}`)
      break;
      case 4: 
        console.log(`Valor do Ingresso: ${valoresFICat4}`)
        console.log(`Valor total: ${valoresFICat4 * quantidadeDeIngresso}`)
    break;
    }
  }
}



/* console.log(digiteACategoria)
console.log(quantidadeDeIngresso) */
