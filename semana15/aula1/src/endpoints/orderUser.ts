import {Request, Response} from 'express'
import orderByName from '../data/orderUserByName'

export const orderUser = async(req:Request, res: Response):Promise<void> =>{
    let orderBy: any = req.query.orderby
    let orderType: any = req.query.ordertype

    try {
        const users = await orderByName(orderBy, orderType)

        res.status(200).send(users)
        
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}