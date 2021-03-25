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

## Esse erro dis que existe um relação entre tabelas e por isso não possível apagar

### Exercício 2

<b>a)</b> Esse é um tabela que relaciona o elenco de cada um dos filmes.<br>
<b>b)</b>

```
INSERT INTO MovieCast(movie_id , actor_id)
VALUES(
	"001",
    "002"
);

INSERT INTO MovieCast(movie_id , actor_id)
VALUES(
	"001",
    "001"
);

INSERT INTO MovieCast(movie_id , actor_id)
VALUES(
	"002",
    "005"
);
INSERT INTO MovieCast(movie_id , actor_id)
VALUES(
	"002",
    "006"
);
INSERT INTO MovieCast(movie_id , actor_id)
VALUES(
	"003",
    "007"
);
INSERT INTO MovieCast(movie_id , actor_id)
VALUES(
	"003",
    "008"
);
```
<b>C) </b>

```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`epps-felipe-moura`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
```
Diz que não encontrou conseguiu fazer a referencia junto com movie_id

<b>D)</b>
```
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
```
Está dizendo que não pode fazer esses update pois existe uma relação
