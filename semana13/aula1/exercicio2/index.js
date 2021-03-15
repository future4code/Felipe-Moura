const operacao = process.argv[2]
const numberOne = Number(process.argv[3])
const numberTwo = Number(process.argv[4])

switch(operacao){
    case 'add':
        console.log(`A soma dos valores ${numberOne} + ${numberTwo} é = ${numberOne + numberTwo}`)
        break
    case 'sub':
        console.log(`A soma dos valores ${numberOne} - ${numberTwo} é = ${numberOne - numberTwo}`)
        break
    case 'mult':
        console.log(`A soma dos valores ${numberOne} * ${numberTwo} é = ${numberOne * numberTwo}`)
        break
    case 'div':
        console.log(`A soma dos valores ${numberOne} / ${numberTwo} é = ${numberOne / numberTwo}`)
        break
    default:
        console.log('Desculpe mas não conheço essa operação')
}