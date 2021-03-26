import { connection } from "../index";
import { Request, Response } from "express";
import { getUser } from "../types";

const getTask = async (req: Request, res: Response) => {
  try {
    const id: getUser = {
      id: req.params.id,
    };

    const results = await connection.select().table("TASKLIST").where("id", id.id);
    console.log(results)
    res.status(200).send(results)
  } catch (error) {
    console.log("Sorry! Task don't found");
    res.status(404).send("Task don't found");
  }
};

export default getTask;
