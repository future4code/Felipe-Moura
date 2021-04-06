import app from "./app";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { singupUser } from "./endpoints/singup";
import { compareHash, generateHash } from "./services/generateHash";


const hash = async(str:string) =>{
    const hash =  await generateHash(str)
    const compare = await compareHash(str, hash)
    console.log(hash)
    console.log(compare)
    return compare
}

hash('str')
hash('stra')

app.post('/user/create', createUser)
app.post('/user/singup', singupUser)
app.post('/user/login', login)