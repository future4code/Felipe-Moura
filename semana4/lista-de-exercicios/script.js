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

function verificaTriangulo(ladoA, ladoB, ladoC){
 if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
   console.log('Tringulo Equilatero')
 }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
   console.log('Tringulo Isósceles')
 }else{
   console.log('trigulo escaleno')
 }
}

console.log(verificaTriangulo(3,3,3))