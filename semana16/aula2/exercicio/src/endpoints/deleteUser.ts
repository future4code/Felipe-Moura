import {Request, Response} from 'express'
import { getTokenData } from '../services/authenticator'
import {deleteUsers}from '../data/deleteUsers'



export const deleteUser = async(req: Request, res: Response): Promise<void> =>{
    try {
        const token = req.headers.authorization as string

        const authorizationData = getTokenData(token)

        if(authorizationData?.role.toLowerCase() !== "admin"){
            throw new Error ("Sorry, Only admin user can acess this funcionality")
        }

        const id = req.params.id

        await deleteUsers(id)

        res.status(200).send('Usuário apagado')

        
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}