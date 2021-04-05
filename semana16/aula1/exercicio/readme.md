# Introdução a Autenticação

## 1 - a)  Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

R: Com strings temos uma grande variedade de opções.

## b)  A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 

R: Foi criado um arquivo GeneratedID dentro da pasta services

## 2 
```
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
## a)Explique o código acima com as suas palavras. 
R: O código acima faz a comunição com o banco de dados através do knex e insere dados na tabela informada

## b)  Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
```
CREATE TABLE User_semana16 (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
## c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.
EndPoint:
```
import {Request, Response} from 'express'
import create from '../data/createNewUser'
import generateId from '../services/generateId'
import {user} from '../types'


export const createUser = async(req:Request, res: Response): Promise<void> =>{
    try {
        const newUser : user ={
            id: generateId(),
            email: req.body.email,
            password: req.body.password
        }

        if(!newUser.email || !newUser.password){
            throw new Error('Please, fill email and password')
        }

        const user = await create(newUser)

        res.status(201).send('User Created')
        
    } catch (error) {
        res.status(403).send("Sorry, could not create user ")
    }
}
```
Query Builder
```
import { connection, userTable } from "../connection";
import { user } from "../types";

export default async function create(user: user){
    const {id, email, password} = user

    await connection.insert({
        id, email, password
    }).into(userTable)
}
```
## 3- a) O que a linha as string faz? Por que precisamos usar ela ali?
R: Como as string diz que deve ser retonardo como um string.

## b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
R: Foi criado no arquivo generateToken