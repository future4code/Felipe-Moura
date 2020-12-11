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
