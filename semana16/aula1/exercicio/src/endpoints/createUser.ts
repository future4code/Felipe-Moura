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

        if(!email){
        
            types.email.regex.test(email)
            throw new Error (types.email.message)
        }
        if(!password){

            types.password.regex.test(password)
            throw new Error(types.password.message)
        }

        //Procurando usuários cadastrados com esse email
        
    
    
        //Não permitindo cadastro duplicado
        const [user] = await searchEmail(email)
        if(!user){
            if(user.email){
                const [userData] = await getUserByEmail(user.email)
                console.log(userData)
                res.status(200).send(userData)
            }
            res.statusCode = 400
            throw new Error ('Email já cadastrado')
        }


        const id: string = generateId()

        const newUser: user = {id, email, password}

        const createUser = await create(newUser)

        const token: string = generateToken({id})

        res.status(201).send({newUser, token})

    
        
    } catch (error) {
        console.log(error.message)
        res.status(403).send(error.message)
    }
}