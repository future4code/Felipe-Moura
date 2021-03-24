import connection from "../connection";
import { Request, Response } from "express";

const getAllActor =  async (req: Request, res: Response) => {
  try {
    const actors = await connection.raw(`
        SELECT * FROM Actor 
      
      `);
    res.status(200).send(actors[0]);
  } catch (error) {
    res.status(500).send("Invalid Server error");
  }
};
export default getAllActor