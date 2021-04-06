import {Request, Response} from 'express'
import { connection, userTable } from '../connection'
import create from '../data/createNewUser'
import getUserByEmail from '../data/getUserByEmail'
import searchEmail from '../data/searchEmail'
import { generateToken } from '../services/authenticator'
import generateId from '../services/generateId'
import { types } from '../services/validade'
import {user} from '../types'


export const createUser = async(req:Request, res: Response): Promise<void> =>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            throw new Error ('Please Fill fields email and password')
        }

        if(!types.email.regex.test(email)){
         
            throw new Error (types.email.message)
        }

        if(!types.password.regex.test(password)){
            throw new Error(types.password.message)
        }

        //Não permitindo cadastro duplicado
        const [user] = await searchEmail(email)
        if(user){
      
            res.statusCode = 400
            throw new Error ('Email já cadastrado')
        }


        const id: string = generateId()
        const token: string = generateToken({id})

        const newUser: user = {id, email, password}

        const createUser = await create(newUser)


        res.status(201).send({newUser, token})

    
        
    } catch (error) {
        console.log(error.message)
        res.status(403).send(error.message)
    }
}