import { connection } from "../index";
import { Response, Request } from "express";
import { task } from "../types";

const task = async (req: Request, res: Response): Promise<void> => {
  try {
    // await connection.raw(`
    //     INSERT INTO TASKLIST(id, task, description, creatorId, responsibleId)
    //     VALUES(
    //         ${Date.now()},
    //         ${req.body.task},
    //         ${req.body.description},
    //         ${req.body.creatorId},
    //         ${req.body.responsibleId}

    //     )
    // `)

    const newData = (date: string) => {
      const newDate = date.split("/").reverse().join("-");
      console.log(newDate);
      return newDate;
    };
    const task: task = {
      id: Date.now(),
      task: req.body.task,
      description: req.body.description,
      creatorId: req.body.creatorId,
      responsibleId: req.body.creatorId,
      limitDate: newData(req.body.limitDate),
    };

    if (task.task === "") {
      throw new Error("Sorry I need a tile please");
    }
    if (task.description === "") {
      throw new Error("Sorry I need a email please");
    }

    if (task.creatorId === "" && task.creatorId === '') {
      throw new Error("Sorry I need a creatorId please");
    }

    if(task.limitDate === ""){
        throw new Error ("Please fill limit date ")
    }

    await connection.insert(task).into("TASKLIST");

    res.status(201).send("Created");
  } catch (error) {
    console.log(error.message);
    res.status(403).send("Internal Server Error");
  }
};

export default task;
