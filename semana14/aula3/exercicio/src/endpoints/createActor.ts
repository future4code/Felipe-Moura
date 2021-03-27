import connection from "../connection";
import { Request, Response } from "express";

const createActor = async (

    req: Request,
    res: Response
    ): Promise<void> => {
        try {
    await connection
      .insert({
        id: Date.now(),
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.dateOfBirth,
        gender: req.body.gender,
      })
      .into("Actor");

    res.status(201).send("Created");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
  //   try {
  //     await connection.raw(
  //       `INSERT INTO Actor(id, name, gender, birth_date, salary)
  //             VALUES(
  //                 "${Date.now()}",
  //                 "${req.body.name}",
  //                 "${req.body.gender}",
  //                 "${req.body.dateOfBirth}",
  //                 "${req.body.salary}"

  //             )`
  //     );

  //     res.status(201).send("Created!");
  //   } catch (error) {
  //     console.log(error.message);
  //     res.status(500).send("Internal Server Error");
  //   }
};

export default createActor;
