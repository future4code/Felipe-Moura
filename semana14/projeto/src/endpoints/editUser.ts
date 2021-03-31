import { connection } from "../index";
import { Request, Response } from "express";
import { editUser, getUser } from "../types";

const editUser = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.body);
    const id: getUser = {
      id: req.params.id,
    };

    if (
      req.body.name === undefined &&
      req.body.nickname === undefined &&
      req.body.email === undefined
    ) {
      throw new Error(
        "You need send any fields for update (name, nickname, email)"
      );
    } else {
      const editUser: editUser = {
        id: id.id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      };
      await connection("USER").update(editUser).where(id);
      console.log(req.body.name);
      res.end();
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).end();
  }
};

export default editUser;
