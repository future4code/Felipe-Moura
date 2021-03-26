import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from 'dotenv'
import user from "./endpoints/user";
import getUser from "./endpoints/getUser";
import editUser from "./endpoints/editUser";
import task from "./endpoints/task";
import getTask from "./endpoints/getTask";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection:{
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})


app.post('/user', user)

app.get('/user/:id', getUser)

app.put('/user/:id', editUser)

app.post('/task', task)

app.get('/task/:id', getTask)

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server`)
    }
    
})
