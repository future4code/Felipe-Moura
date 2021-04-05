import { connection, userTable } from "../connection";
import { user } from "../types";

export default async function create(user: user){
    const {id, email, password} = user

    await connection.insert({
        id, email, password
    }).into(userTable)
}