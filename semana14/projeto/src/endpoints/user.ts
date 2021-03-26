import { connection } from "../index";
import { Response, Request } from "express";
import { user } from "../types";

const user = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: user = {
      id: Date.now(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };

    if (users.name === "") {
      throw new Error("Sorry I need a name please");
    }
    if (users.email === "") {
      throw new Error("Sorry I need a email please");
    }
    if (users.nickname === "") {
      throw new Error("Sorry I need a nickname please");
    }

    await connection.insert(users).into("USER");

    

    res.status(201).send("Created");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
};

export default user;
