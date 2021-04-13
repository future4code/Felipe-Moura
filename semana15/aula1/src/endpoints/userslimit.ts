import {request, Request, Response} from 'express'
import selectUsers from '../data/selectUsers'


export  const usersLimit = async(req: Request, res: Response ):Promise<void> =>{
    let page = req.query.page as string

    if(isNaN(Number(page))||Number(page) < 1){
        page ="1"
    }
    const limit:number = 5
    const offset: number = limit * (Number(page) - 1)

    try {
        const users = await selectUsers(limit, offset)
        res.status(200).send(users)
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }

}