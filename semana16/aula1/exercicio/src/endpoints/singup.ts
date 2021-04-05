import {Request, Response} from 'express'
import getUserByEmail from '../data/getUserByEmail'

export const singupUser = async(req: Request, res: Response): Promise<void> =>{
    try {
        const {email} = req.body
        
        if(!email){
            throw new Error ('Please Fill fields email and password')
        }

        const [user] = await getUserByEmail(email)
        
    
        res.status(200).send(user)

    } catch (error) {
        res.status(403).send('Sorry, could not cerate user')
    }
}