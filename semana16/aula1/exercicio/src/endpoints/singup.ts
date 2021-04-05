import {Request, Response} from 'express'

import create from '../data/createNewUser'
import generateId from '../services/generateId'
import { generateToken } from '../services/authenticator'
import { user } from '../types'

export const singupUser = async(req: Request, res: Response): Promise<void> =>{
    try {
        const newUser: user ={
            id: generateId(),
            email: req.body,
            password: req.body

        }

        if(!newUser.email || !newUser.password) {
            throw new Error('Please fill fields email and password')
        }

        const user = await create(newUser)
        res.status(200).send({token: generateToken(newUser.id)})

    } catch (error) {
        res.status(403).send('Sorry, could not cerate user')
    }
}