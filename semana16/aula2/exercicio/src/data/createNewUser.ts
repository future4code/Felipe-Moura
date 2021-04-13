import { connection, userTable } from "../connection";
import { user } from "../types";

export default async function create(user: user){
  
    await connection.insert(user).into(userTable)
}