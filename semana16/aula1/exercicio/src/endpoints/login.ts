import {Request, Response} from 'express'
import getUserByEmail from '../data/getUserByEmail'
import { generateToken } from '../services/authenticator'
import { types } from '../services/validade'

export const login  = async(req: Request, res: Response):Promise<void> =>{
    try {
        const {email, password} = req.body
        const [user] = await getUserByEmail(email)

        if(!types.email.regex.test(email)){
            console.log(types.email.regex.test(email))
            throw new Error(types.email.message)
        }


        if(!email || user.password !== password){
            throw new Error ('Please Fill fields email and password')
        }

        res.status(200).send({token: generateToken({id: user.id})})

      
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}