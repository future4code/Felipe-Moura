import express ,{Express} from 'express'
import cors from 'cors'
import {AddressInfo} from "net"

const app: Express = express()
app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in localhost:${address.port}`)
    }else{
        console.log(`Failure upon starting server`)
    }
})

export default app