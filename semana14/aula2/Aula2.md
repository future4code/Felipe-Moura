## AUla 2

### Exercício 1

a) Removeria a coluna salary, mas como ela não existe na tabela nenhum das colunas é afetada<br>
b) Mudaria o nome da coluna Gender para sex. <br>
c) Permitiria que o coluna Gender recebesse até 255 caracteres, <br>
d)

```
ALTER TABLE  Actor CHANGE gender gender VARCHAR(255)
```

### Exercício 2

a)

```
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = 3;
UPDATE Actor
SET birth_date = "1936-10-05"
WHERE id = 3
```

b)

```
UPDATE Actor
SET name = "Juliana Pães"
WHERE id = 5;
//Segunda parte
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = 5
```

c)

```
UPDATE Actor
SET
    name = "Fernanda Montenegro",
    birth_date = "1929-10-16",
    salary = 600000,
    gender = "female"
WHERE id = "005"
```

d) O banco tenta fazer o update mas ele não afeta nenhuma linha

```
UPDATE Actor
SET name = "Vera Fisher"
WHERE id = 6
```

### Exercício 3

a)

```
DELETE  FROM Actor WHERE name = "Fernanda Montenegro"
```

b)

```
DELETE FROM Actor WHERE (gender = "male" AND salary > 400000)
```

### Exercício 4

a)

```
SELECT MAX (salary) FROM Actor
```

B)

```
SELECT MIN (salary) FROM Actor
```

c)

```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

c)

```
SELECT SUM(salary) FROM Actor
```

### Exercício 5

a) Agrupou a quantidade de pessoas por genero e trouxe duas mulheres(female) e um homem(male) <br>

b)

```
SELECT * FROM Actor ORDER BY name ASC
```

C)

```
SELECT* FROM Actor ORDER BY salary ASC LIMIT 3
```

D)

```
SELECT* FROM Actor ORDER BY salary ASC LIMIT 3
```

e)

```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender
```

### EXERCÍCIO 6

a)

```
ALTER TABLE Filmes ADD playing_limit_date DATE
```
b)

```
UPDATE Filmes 
SET rating = 8.5
WHERE id = "002";

```
c)

```
UPDATE  Filmes
SET playing_limit_date = "2021-03-31"
WHERE id = "001";

UPDATE  Filmes
SET playing_limit_date = "2020-03-31"
WHERE id = "002"
```
d)

```
DELETE FROM Filmes WHERE id = "004";

UPDATE Filmes 
SET sinopse = "Chicó e João grilo são legais"
WHERE id = "004"

```
O banco tenta atualizar, mas não encontra o ID e não da erro também
### Exercício 7

a)
```
SELECT * FROM Filmes WHERE rating > 7.5

```
B)
```
SELECT AVG(rating) FROM Filmes

```
C)/ D)
```
SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE()

```
E)
```
SELECT MAX(rating) FROM Filmes

```
f)
```
SELECT MIN(rating) FROM Filmes

```

### Exercício 8
a)
```
SELECT * FROM Filmes ORDER BY name ASC
b)
```
SELECT * FROM Filmes ORDER BY name ASC LIMIT 5

```
C)
```
SELECT * FROM Filmes ORDER BY release_date DESC  LIMIT 3

```
D)
```
SELECT * FROM Filmes ORDER BY rating DESC LIMIT 3

```
