import {Request, Response } from 'express'
import getUser from '../data/getUser'
import selectAllUsers from '../data/selectAllUsers'

export const User = async(req: Request, res: Response): Promise<void> =>{
    let name: any = req.query.name
    let type:any = req.query.type
    let orderby:any = req.query.orderby
    let ordertype: any = req.query.ordertype
    let page:any = req.query.page
    if(isNaN(Number(page)) || Number(page) < 1){
        page = "1"
    }
    const limit: number = 5
    const offset : number = limit *(Number(page) - 1)

    if(orderby === undefined && ordertype === undefined){
        name= "*"
        orderby = "name"
        ordertype = "DESC"
    }


    try{
        const users = await getUser(name, type, orderby,ordertype, limit, offset)
        res.status(200).send(users)
    }catch(error){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}