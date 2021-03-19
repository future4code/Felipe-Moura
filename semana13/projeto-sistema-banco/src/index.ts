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
      extract: []
    }
   

    allUsers.push(reqBody);
    res.status(201).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
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
