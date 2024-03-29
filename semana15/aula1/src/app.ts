import express from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3004, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is Runining in http://localhost:${address.port}`)
    }else{
        console.log(`Failuer upon stargin server.`)
    }
})

export default app