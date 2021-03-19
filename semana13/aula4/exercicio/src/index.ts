import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, UserType, user } from "./users";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const myUsers = users;
    res.status(200).send(myUsers);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
//Exercício 2
app.get("/users/type", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const type: string = req.query.type as string;
    if (type === UserType.ADMIN || type === UserType.NORMAL) {
      const typeUser = users;
      const myUser = typeUser.filter((tp) => {
        return tp.type.includes(type);
      });
      res.status(200).send(myUser);
    } else {
      throw new Error("Tipo inválido");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//Exercício 3
app.get("/users/name", (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string;

    const typeUser = users;
    const myUser = typeUser.filter((tp) => {
      return tp.name.toLowerCase().includes(name);
    });

    if (!myUser.length) {
      throw new Error("Nenhuma Usuário Encontrado");
    }
    res.status(200).send(myUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//Exercicio 4

app.put("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const reqBody: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: UserType.ADMIN,
      age: req.body.age,
    };

    //   if (
    //     !reqBody.age ||
    //     !reqBody.email ||
    //     !reqBody.id ||
    //     !reqBody.name ||
    //     !reqBody.type
    //   ) {
    //     errorCode = 422;
    //     throw new Error("Check as informações");
    //   }

    users.push(reqBody);
    res.status(201).send({ message: "User Created" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Exercício 5
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    let user = users.find((u) => {
      return u.id === id;
    });

    const reqBody: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: UserType.ADMIN,
      age: req.body.age,
    };

    user = reqBody

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("Inválido");
  }
});
app.patch("/users/:id", (req: Request, res: Response) => {
  try {
    const id: number = Number(req.params.id);
    let user = users.find((u) => {
      return u.id === id;
    });

    const reqBody: user = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      type: UserType.ADMIN,
      age: req.body.age,
    };

    user = reqBody

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("Inválido");
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

//Respostas exercícios
/*Exercício 1 
a) Utilizaria um método GET
b) A URL "/users"
*/

/*
Exercício 2 
    a) Passei através de um ENUM e fiz a tipagem dentro do array de users
    b)Fiz um validação simples com um if ou else
*/

/*Exercício 3
    a) os parâmetros foram passando por query params
    b)Foi alterado sempre que não encontro o resultado com o nome ele mostra um erro

*/
/* Exercício 4
    A) Quando muda para put continua adicinando
    b) não o PUT é melhorar par 

*/
