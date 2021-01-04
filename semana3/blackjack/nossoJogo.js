/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let pontos = 0
let primeiraCarta = comprarCarta()
let segundaCarta = comprarCarta()
let primeiraCartaComputador = comprarCarta()
let segundaCartaComputador = comprarCarta()

console.log('Bem vindo ao jogo de Blackjack')
if(confirm('Quer comprar uma nova carta')){
   primeiraCarta.texto
   pontos = primeiraCarta.valor
   segundaCarta.texto
   pontos += segundaCarta.valor
   let pontosUsuario = pontos
   pontos = 0
   primeiraCartaComputador.texto
   
   pontos = primeiraCartaComputador.valor
   segundaCartaComputador.texto
   pontos += segundaCartaComputador.valor
   let pontosComputador = pontos
   
   if(pontosUsuario <= 21 && pontosComputador <= 21){
      console.log(`O Usuario - Cartas ${primeiraCarta.texto} ${segundaCarta.texto} pontuação ${pontosUsuario}`)
      console.log(`O Computador - Cartas ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} pontuação ${pontosComputador}`)

   }
   if(pontosComputador === pontosUsuario){
      console.log('Deu empate')
   }else if(pontosUsuario > pontosComputador){
      console.log('Usuario ganhou')
   }else{
      console.log('Computador Ganhou')
   }
 
}else{
   console.log(`O jogo acabou`)
}