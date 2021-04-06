import { connection, userTable } from "../connection";

export default async function getUserByEmail(email:string){
    const result = await connection.select('*').from(userTable).where({email})
    
    
    return result
}