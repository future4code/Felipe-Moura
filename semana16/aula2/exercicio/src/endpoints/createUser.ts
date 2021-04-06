import {Request, Response} from 'express'
import create from '../data/createNewUser'

import searchEmail from '../data/searchEmail'
import { generateToken } from '../services/authenticator'
import { generateHash } from '../services/generateHash'
import generateId from '../services/generateId'
import { types } from '../services/validade'
import {authenticationData, user} from '../types'


export const createUser = async(req:Request, res: Response): Promise<void> =>{
    try {
        const userData ={
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
        }

        if(!userData.email || !userData.password || !userData.role){
            throw new Error ('Please Fill fields email and password e Role')
        }

        if(!types.email.regex.test(userData.email)){
            throw new Error (types.email.message)
        }

        if(!types.password.regex.test(userData.password)){
            throw new Error(types.password.message)
        }
        if(userData.role.toUpperCase() !== "ADMIN" && userData.role.toUpperCase() !== "NORMAL"){
            throw new Error("O Usuário só pode ser ADMIN ou NORMAL")

        }

        //Não permitindo cadastro duplicado
        const [user] = await searchEmail(userData.email)
        if(user){
            res.statusCode = 400
            throw new Error ('Email já cadastrado')
        }

        const id: string = generateId()
  
        //adicionando hash ao inves de passar a senha
        const cypherText = await generateHash(userData.password)
        const token = generateToken({
            id, 
            role: userData.role
        })
        const newUser: user = {id: id, email: userData.email, password: cypherText, role: userData.role}

        await create(newUser)

        res.status(201).send({token})
        
    } catch (error) {
        console.log(error.message)
        res.status(403).send(error.message)
    }
}