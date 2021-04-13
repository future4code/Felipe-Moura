import { connection, userTable } from "../connection";

export default async function getUserByEmail(id:string){
    const result = await connection.select('*').from(userTable).where({id})
        
    return result[0]
}