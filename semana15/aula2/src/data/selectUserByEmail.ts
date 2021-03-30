import { connection } from "..";

export default async function selectUserByEmail(email: string) {
   console.count('check')
   const result: any = await connection
      .select("*")
      .from("users_aula48")
      .where({ email })

   
   return result[0]
}

