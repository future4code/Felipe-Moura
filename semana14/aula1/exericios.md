## SEMANA 16

---

### Introdução a banco de dados

---

Exercício 1
a) VARCHAR: limita a quantidade de 255 caracteres, <br>
PRIMARY KEY: Define como uma chave primária <br>
NOT NULL: Diz que esse campo não pode ser vazio <br>
DATE: Informa que deve ser uma data. <br><br>
b) SHOW DATABASES: Trouxe os bancos de dados presentes configurados no meu workbench <br>
SHOW TABLE: Mostrou as duas tabelas que possuo dentro do banco que estou logado. <br><br>
c) Mostrou todos os campos da tabela Actor com os seus tipos, se podem ou não ser nulos<br>

---

Exercício 2
a)

```
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b) Resposta do banco : Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Diz que chave primaria está duplicada. Isso corre porque já temos uma primary key com o "id: 002".

c) Reposta do banco: Error Code: 1136. Column count doesn't match value count at row 1. Essa resposta se deu porque a quantidade de campo informados é maior do que a quantidade dos que foram especificados.<br>
d)Resposta do banco: Error Code: 1364. Field 'name' doesn't have a default value. Isso ocorreu porque não passamos o campo nome que é obrigatório. <br>
e) Resposta do Banco : Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Ocorreu porque devemos passar o valor da data entre "" foi passada sem as ""

---

Exercício 3<br>
a) SELECT \* FROM Actor WHERE gender = "female" <br>
b) SELECT salary FROM Actor WHERE name = "Tony Ramos" <br>
c) Retornou vazio, pois não nenhum preenchimento inválido <br>
d)SELECT id, name, salary FROM Actor WHERE salary < 500000 <br>
e)Foi passada a propriedade <b>NOME</b> e o correto é <b>Name</b>

---

Exercício 4
a) A query pega todos os elementos que o nome começa com A ou J e ganham salários acima de 300.000 <br>
b)

```
 SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

c)

```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
```

d)

```
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%g%") AND (salary < 900000 and salary > 350000)
```

---

Exercício 5
a)

```
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    assessment INT NOT NULL
);
```

b)

```
INSERT INTO Filmes(id, name, sinopse, release_date, assessment)
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c)

```
INSERT INTO Filmes(id, name, sinopse, release_date, assessment)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

d)

```
INSERT INTO Filmes(id, name, sinopse, release_date, assessment)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e)

```
INSERT INTO Filmes(id, name, sinopse, release_date, assessment)
VALUES(
	"004",
    "O Auto da Compadecida",
    "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
    "2000-09-10",
    9
);

```

---

Exercício 6<br>
a)

```
SELECT id, name, assessment FROM Filmes WHERE id = "001";
```

b)

```
SELECT * FROM Filmes WHERE name = "se eu fosse você";
```

c)

```
SELECT id, name, sinopse FROM Filmes where assessment > 7;
```

---

Exercício 7<br>
a)

```
SELECT * FROM Filmes
WHERE(name LIKE "%vida%" )
```

b)

```
SELECT * FROM Filmes
WHERE(name LIKE "%vida%" OR sinopse LIKE "%vida%" )
```

c)

```
SELECT * FROM Filmes
WHERE(release_date LIKE release_date < 2021-01-01 )
```

D)

```
SELECT * FROM Filmes
WHERE(release_date LIKE release_date < 2021-01-01 ) AND (name LIKE "%vida%" OR sinopse LIKE "%vida%" ) OR (assessment LIKE assessment > 7);
```
