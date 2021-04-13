import { connection, userTable } from "../connection"

export const deleteUsers = async(id: string): Promise<any> =>{
    await connection.delete().from(userTable).where({id})
}