import connection from "../connection";
import { Request, Response } from "express";

const updateActor = async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.dateOfBirth,
        gender: req.body.gender,
      })
      .where({
        id: req.params.id,
      });

    res.end();
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server Error");
  }
};

export default updateActor