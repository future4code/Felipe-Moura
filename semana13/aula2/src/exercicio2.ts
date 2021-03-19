//Exercício A
//As entradas é o array de numero e a função e saída é objeto estatísticas

//Exercício B
// O array de números, a variável soma o objeto estatísticas

type amostraDeIdades = Array<number>;

const amostraDeIdades = [21, 18, 65, 44, 15, 18];
;

function obterEstatisticas(numeros) {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

console.log(obterEstatisticas(amostraDeIdades));
