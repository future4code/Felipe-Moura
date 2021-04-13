import { connection, userTable } from "../connection";

export default async function searchEmail(email:string){
    const result = await connection(userTable).where({email})
    return result
}