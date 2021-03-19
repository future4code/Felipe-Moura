import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser, allUsers, extract } from "./Users";
const app = express();
app.use(express.json());
app.use(cors());

//Criando a conta
app.post("/create", (req: Request, res: Response) => {
  let errorCode: number = 400;
  const inicialBalance: number = 0;

  try {
    const reqBody: createUser = {
      id: allUsers.length + 1,
      name: req.body.name,
      age: req.body.age,
      cpf: req.body.cpf,
      balance: inicialBalance,
      extract: [],
    };

    const ageUSer = req.body.age;
    function calculaIdade(dataNasc: any) {
      let dataAtual = new Date();
      let anoAtual = dataAtual.getFullYear();
      let anoNascParts = dataNasc.split("/");
      let diaNasc = anoNascParts[0];
      let mesNasc = anoNascParts[1];
      let anoNasc = anoNascParts[2];
      let idade = anoAtual - anoNasc;
      let mesAtual = dataAtual.getMonth() + 1;
      //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
      if (mesAtual < mesNasc) {
        idade--;
      } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
          if (new Date().getDate() < diaNasc) {
            //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
            idade--;
          }
        }
      }
      return idade;
    }

    if (calculaIdade(ageUSer) < 18) {
      throw new Error("Para abrir uma conta é necessário ter 18 anos ou mais");
    }

    // const userAger = () =>{
    //     let ageUser = r
    // }

    allUsers.push(reqBody);
    res.status(201).send(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Pegando users
app.get("/users", (req: Request, res: Response) => {
  try {
    const myUsers = allUsers;
    res.status(200).send(myUsers);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
