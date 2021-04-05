import {Request, Response} from 'express'
import create from '../data/createNewUser'
import generateId from '../services/generateId'
import {user} from '../types'


export const createUser = async(req:Request, res: Response): Promise<void> =>{
    try {
        const newUser : user ={
            id: generateId(),
            email: req.body.email,
            password: req.body.password
        }

        if(!newUser.email || !newUser.password){
            throw new Error('Please, fill email and password')
        }

        const user = await create(newUser)

        res.status(201).send('User Created')
        
    } catch (error) {
        res.status(403).send("Sorry, could not create user ")
    }
}