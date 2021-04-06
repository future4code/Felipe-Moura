import {Request, Response} from 'express'
import getUserByEmail from '../data/getUserByEmail'
import { generateToken } from '../services/authenticator'
import { compareHash } from '../services/generateHash'
import { types } from '../services/validade'

export const login  = async(req: Request, res: Response):Promise<void> =>{
    try {
        const {email, password} = req.body
        const [user] = await getUserByEmail(email)
        console.log(password)

        if(!types.email.regex.test(email)){
            throw new Error(types.email.message)
        }

        if(!email){
            res.statusCode = 404
            throw new Error ('Please Fill fields email and password')
        }
        const hashCompare = await compareHash(password, user.password)
        
        if(!hashCompare){
            res.statusCode = 401
            throw new Error ("Senha Incorrenta")
        }

        const token = generateToken({
            id: user.id,
            role: user.role,
        })

        res.status(200).send({token})
      
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}