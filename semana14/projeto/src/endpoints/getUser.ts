import { connection } from "../index";
import { Response, Request } from "express";
import { getUser } from "../types";

const getUser = async (req: Request, res: Response) => {
  try {
    const id: getUser = {
      id: req.params.id,
    };
   
    const result = await connection.raw(`
        SELECT * FROM USER WHERE id = ${id.id}`)
        res.status(200).send(result[0]);
  } catch (error) {
    console.log("Not found User");
    res.status(404).send("Not found User");
  }
};

export default getUser;
