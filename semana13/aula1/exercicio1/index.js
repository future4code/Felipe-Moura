//A) Para passarmos parâmetros através da linha de comando devemos armazena-los pelo process.argv.
//Sempre iniciando pelo indice[2].

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log(`Olá ${name}! você tem ${age} anos`);

console.log(
  `${name} hoje você tem  ${age} anos. Em sete anos você terá ${age + 7}`
);
