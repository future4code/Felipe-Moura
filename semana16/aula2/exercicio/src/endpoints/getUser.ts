import {Request, Response} from 'express'
import getUserById from '../data/getUserById'
import { getTokenData } from '../services/authenticator'
import {authenticationData} from '../types'

export const getUser = async(req: Request, res: Response): Promise<void> =>{
    try {
        const token = req.headers.authorization as string
        
        const authorizationData = getTokenData(token) as authenticationData
        console.log(authorizationData.role)

        if(authorizationData.role.toLowerCase() !== "normal"){
            throw new Error("Only a normal user can access this funcionality")
        }
    
        const user = await getUserById(authorizationData.id)
        res.status(200).send({user: user.email, id: user.id, role: authorizationData.role})
         
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}