//Exercicio de Interpretação de código
/* 1) É uma conversão de moeda, convertendo o valor em dolares para reais. 
  Essa função espera recever um valor que será convertido.
  Pede para o usuario a contação de um dolar (R$ 5,074 no dia 11/12/2020),
  realiza a multiplicação do valor da cotação(5.074) pelo valor a ser convertido nesse caso 100
  Nesse caso retornar R$ 507,40 
*/

/* 2)Essa função espera receber dois parâmetros sendo o primeiro o tipo de investimento e o segundo o valor
  para cada tipo de investimento o valor será multiplicado por coefiente já estimulado.
  Caso o tipo do investimento não seja encontrado vai ser mostrar uma mensagem na tela.
  Após a verificação do tipo do investimento ela retorna o valor atual do investimento.

  No console será exibito R$ 165,00 para o investimenmto em ações
  No segundo montante será exibido o alerta de 'Tipo de investimento informado incorreto' pois o investimento em tesouro direto não está disponível
*/

/* 3)
  Verifica cada um dos números do array numeros caso esse numero for par ele enviar para o array1 e caso for impar ele envia para o array2
  No console será exibido Quantidade total de números 14,
  Será exibido 6
  Sera exibido 8
*/

/* 4)
  Vai verificar qual número é maior e qual número é menor do aray numerros
  No console será exibido -10;
  No console será exibido 1590

*/

//Exercicios de Lógicas de Programação
/* 1) 1º) while
  2º) for
  3º) for of
*/
/* 2  a)false
b)false
c)true
d)true
e)true
*/

// 3)
/* const quantidadeDeNumerosPares = 5
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i * 2)
  i++
} */

/* O código não funciona pois uma constante não pode iniciar sem uma atribuição de valor,
mesmo atribuindo o o valor a costante o programa entrará em loop infinito. Para corrigir esse problema devemos incrementar o valor de i toda vez.
Na condição do while também temos que tirar o <= deixando somente o <.
*/

//Exércio 4

/* function verificaTriangulo(ladoA, ladoB, ladoC){
 if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
   console.log('Tringulo Equilatero')
 }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
   console.log('Tringulo Isósceles')
 }else{
   console.log('trigulo escaleno')
 }
}

console.log(verificaTriangulo(3,3,3)) */

// Exercicio 5

// function verificaMaior(num1, num2){
//   let maior 
//   let diferenca = (num1 - num2 )
//   if(num1 >= num2){
//     maior = num1
//   }else{
//     maior = num2
//   }
//   console.log(`O maior número é ${maior}`)
//   if(num1 % num2 === 0 || num2 % num1 === 0){
//     console.log(`${num1} é divisivel por ${num2}`)
//   }else{
//     console.log(`${num1} não é divisil por ${num2}`)
//   }
//   if(diferenca < 0 ){
//     diferenca *= -1
//   }
//   console.log(`A difereça é de ${diferenca}`)
// }
// console.log(verificaMaior(30,15))


// exercicio de funções
//Exercício 1

// let array = [10,11,12,13,14,15]
// function valoresDoArray(array){
//   let maior = 0
//   let menor = 0
//   for(let numero of array){
//     if(numero >= maior && numero >= menor){
//       maior = numero 
//       menor = numero
//     }
    
//     if(maior <= menor){
//       menor = maior
//     }
    
//   }
//   console.log(maior)
//   console.log(menor)
// }


// console.log(valoresDoArray(array))


//Exercício 2
// const helloWord = () =>{
//   alert('Hello Labenu')
// }

// helloWord()

//Exercícios de Objetos
//1) Array são listas que utulizamos para guardar valores nós quais a ordem não importam muito
//Objetos são listas onde todo elemento possui uma chave e um valor das quais podemos acessa-las posteriormemte

/* 2 */
// const criaRetangulo = (lado1, lado2) =>{
//   return{
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: lado1 * lado2
//   }
// }

// console.log(criaRetangulo(2,5))
/* 3 */
/* const filme = {
  nome: `Star Wars Uma nova Esperança`,
  anoLançamento: 1977,
  diretor: `George Lucas`,
  atores: [' Mark Hamill', 'Carrie Fisher', 'Harrison Ford' ]
}
console.log(`Venha assistir ${filme.nome}, de ${filme.anoLançamento}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}` ) */

/* 4 */
// const pessoa = {
//   nome: 'Felipe',
//   idade: 26,
//   email: 'felipemimoura@labenu.com.br',
//   endereco: 'Franco da Rocha '
// }

// const anomino = (pessoa) =>{
//   return{
//     ...pessoa,
//     nome:'Anonino',
//     idade: pessoa.idade,
//     email: pessoa.email,
//     endereco: pessoa.endereco
//   }
// }

// console.log(pessoa)
// console.log(anomino(pessoa))

/* Exercicios de funções de array */

//Exercicio 1
// a)
// console.log('Exercicios sobre funções do array')
// const pessoas = [
//   { nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
// //a
// let adultos = pessoas.filter((adulto, index, lista) =>{
//   return adulto.idade >= 20
// })
// console.log(adultos)

// //b
// let criancas = pessoas.filter((crianca, index, lista) =>{
//   return crianca.idade < 20
// })

// console.log(criancas)

//Exercicio 2
// const array = [1,2,3,4,5,6]
//a
// function multiplicaPorDois (array){
  
//   let dobros = array.map((dobro, index, lista) =>{
//     return dobro * 2
//   })
//   console.log(dobros)
//   return dobros
// }

// multiplicaPorDois(array)

// function multiplicaEMudaParaTexto(array, num){

//     let multiplicado = array.map((resultado) =>{
//       return (resultado * num).toString()
//     })
//     console.log(multiplicado)
//     return multiplicado
// }
// multiplicaEMudaParaTexto(array, 3)

// let verificaParImpar = (num) =>{
//   if(num % 2 === 0){
//     return `${num} é par`
//   }else{
//     return `${num} é impar`
//   }
// }
// let arrayNovo = (array) =>{
//   let novoArray = array.map((num) =>{
//     return (verificaParImpar(num))
//   })
//   console.log(novoArray)
//   return novoArray
  
// }

// arrayNovo(array)

/* 3 */

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 12},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
let podeEntrar = (array) =>{
  let podemEntrar = array.filter((pessoa) =>{
    return((pessoa.idade > 14 && pessoa.idade < 60) && (pessoa.altura >= 1.5))
  })
  console.log(podemEntrar)
  return podemEntrar
}
let naoPodeEntrar = (array) =>{
  let naoPodemEntrar = array.filter((pessoa) =>{
    return((pessoa.idade < 14 || pessoa.idade > 60) || (pessoa.altura < 1.5) )
  })
 
  return naoPodemEntrar
}

podeEntrar(pessoas)
console.log(naoPodeEntrar(pessoas))