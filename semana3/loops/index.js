/* Exercícios interpretação */
// Exercício 1
/* Foi declarando um varaiavel com nome valor e atribuido o valor 0 para ela.
foi iniciado o comando for e declarado uma variável i com o valor também de zero. E está solicitando para que enquanto o valor de i for menor do que 5, deve ser somando o valor de i na variável valor e a variavel i deve ser incrementado uma unidade.

Vai imprimir no console o valor de 10
*/

//Exercicio 2
// A )Vai ser exibido todos números maiores do que 18
// B) Não, seria necessario usar um for iniciando uma variavel "i" e utilizar um lista.length para passar por todos os elementos

/* Exercicios de escrita de código */
let arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55]
/* //A)
console.log('Resposta do item A')
for(let i = 0; i < arrayOriginal.length; i++){
  console.log( arrayOriginal[i])
}
//B)
console.log('Resposta do Item B')
for(let i = 0; i < arrayOriginal.length; i++){
  let divisao = 10
  console.log( arrayOriginal[i] / divisao)
} */
//C
/* console.log('Respsta do item C')
let arrayDeNumerosPares = []
for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
      arrayDeNumerosPares.push(arrayOriginal[i])
    }
  }
  console.log(arrayDeNumerosPares) */

//D
/* console.log('Respsta do item D')
let arrayDeStrings = []
for(let i = 0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2 === 0){
      arrayDeStrings.push(`O elemento do índex ${i} é ${arrayOriginal[i]}`)
    }
}
  console.log(arrayDeStrings)
 */
console.log('Respsta do item E')

let maior = 0
let menor = 0
for(let i = 0; i < arrayOriginal.length; i++){
  if(maior < arrayOriginal[i]){
    maior = arrayOriginal[i]
    menor = arrayOriginal[i]
  }
  if(menor > arrayOriginal[i]){
    menor=arrayOriginal[i]
  }
 
}
console.log(`O maior número é ${maior} e o menor é ${menor}`)
