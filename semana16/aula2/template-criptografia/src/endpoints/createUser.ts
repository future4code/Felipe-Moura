import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/generateId";
import { hash } from "../services/hasManager";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      
      const [user] = await connection('to_do_list_users')
      .where({ email })
      
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      
      const id: string = generateId()
      
      //adicionar encriptação
      const cypherText = await hash(password)
      const newUser: user = { id, name, nickname, email, password: cypherText }

      await connection('to_do_list_users')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ newUser, token })

   } catch (error) {


         res.send({ message: error.message })
      
   }
}