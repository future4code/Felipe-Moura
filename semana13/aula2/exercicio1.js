//Exercício a
var myString = 'Felipe';
// myString = 10
console.log(myString);
//Não será compilado o arquivo e da uma mensagem no terminar "Type 'number' is not assignable to type 'string'."
//Exercício B
//Par permitir que uma variável receba dois tipos de dados basta colocar o operador OU de tipos que seria um |
var number = 27;
// number = 'Felipe'
console.log(number);
var people1 = {
    name: "Felipe",
    age: 27,
    favoriteColour: "Azul"
};
console.log("Pessoa 1", people1);
var people2 = {
    name: "Douglas",
    age: 25,
    favoriteColour: "Verde"
};
console.log("Pessoa 2", people2);
var people3 = {
    name: "José",
    age: 24,
    favoriteColour: "Preto"
};
console.log("Pessoa 3", people3);
//Exercício 4
var rainbowColors;
(function (rainbowColors) {
    rainbowColors["RED"] = "VERMELHO";
    rainbowColors["ORANGE"] = "LARANJA";
    rainbowColors["YELLOW"] = "AMARELHO";
    rainbowColors["GREEN"] = "VERDE";
    rainbowColors["BLUE"] = "AZUL";
    rainbowColors["INDIGO"] = "ANIL";
    rainbowColors["VIOLET"] = "VIOLETA";
})(rainbowColors || (rainbowColors = {}));
console.log('Exercício 4');
var people4 = {
    name: "Felipe",
    age: 27,
    favoriteColour: rainbowColors.BLUE
};
console.log('Pessoa com Enum', people4);
var people5 = {
    name: "Douglas",
    age: 27,
    favoriteColour: rainbowColors.GREEN
};
console.log('Pessoa com Enum', people5);
var people6 = {
    name: "Douglas",
    age: 27,
    favoriteColour: rainbowColors.RED
};
console.log('Pessoa com Enum', people6);
