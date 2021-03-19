//Exercício a
let myString: string = 'Felipe'
// myString = 10
console.log(myString)

//Não será compilado o arquivo e da uma mensagem no terminar "Type 'number' is not assignable to type 'string'."

//Exercício B
//Par permitir que uma variável receba dois tipos de dados basta colocar o operador OU de tipos que seria um |
let number: number | string = 27
// number = 'Felipe'
console.log(number)

//Exercício C
type person = {name: string, age:number, favoriteColour: string}

const people1: person ={
    name: "Felipe",
    age: 27,
    favoriteColour: "Azul"
}
console.log("Pessoa 1",people1)
const people2: person ={
    name: "Douglas",
    age: 25,
    favoriteColour: "Verde"
}
console.log("Pessoa 2",people2)

const people3: person ={
    name: "José",
    age: 24,
    favoriteColour: "Preto"
}
console.log("Pessoa 3",people3)


//Exercício 4

enum rainbowColors{
    RED ="VERMELHO",
    ORANGE = "LARANJA",
    YELLOW = "AMARELHO",
    GREEN = "VERDE",
    BLUE = "AZUL",
    INDIGO = "ANIL",
    VIOLET = "VIOLETA"
}

console.log('Exercício 4')

const people4: person ={
    name: "Felipe",
    age: 27,
    favoriteColour: rainbowColors.BLUE
}
console.log('Pessoa com Enum', people4)

const people5: person ={
    name: "Douglas",
    age: 27,
    favoriteColour: rainbowColors.GREEN
}
console.log('Pessoa com Enum', people5)
const people6: person ={
    name: "Douglas",
    age: 27,
    favoriteColour: rainbowColors.RED
}
console.log('Pessoa com Enum', people6)