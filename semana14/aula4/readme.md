## Resolução dos exercícios referente ao dia 25/03/2021

### Exercício 1

<b>a)</b> A chave estrangeira é o que faz a ligação entre os tabelas do banco de dados. O tornando assim relacional.<br>
<b>B)</b> Todos os comentários foram inspirado no Choque de Cultura.

```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"SADFSA",
    "Filme nascional de cómedia muito divertido, esperando pela continuação",
    9.8,
    "001"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"SADFASA",
    "Filme nascional que eu nunca assisti",
    4,
    "002"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"SADASDAQSA",
    "Filme que representa a vida de um casal padrão do brasileiro by: Choque de Cultura",
    8,
    "003"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"SADASDdAQSA",
    "Mostra que a terra da com mão e retira com a outra",
    7,
    "005"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"SADASDdAQSA2w",
    "Filme de uma cidade que ninguém se importa, só filmado somente com um drone",
    10,
    "006"
);

INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
	"SaADASDdAQSA2w",
    "Pior filme de droga. ",
    9,
    "007"
);
```

<b>C)</b> Todos os comentários foram inspirado no Choque de Cultura.<br>
Error:

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-felipe-moura`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
```

Esse erro diz que não foi possível encontrar o id na tabela de Filmes.<br>

<b>D) </b>

```
ALTER TABLE Filmes
DROP COLUMN rating

```
<b>E) </b>
```
DELETE FROM Filmes
WHERE id = "001"
```
Error: 
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`epps-felipe-moura`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

```
Esse erro dis que existe um relação entre tabelas e por isso não possível apagar
---
### Exercício 1

<b>a)</b> A chave estrangeira é o que faz a ligação entre os tabelas do banco de dados. O tornando assim relacional.<br>
