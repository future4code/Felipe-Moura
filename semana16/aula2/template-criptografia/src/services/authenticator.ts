import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (
   payload: authenticationData
): string => jwt.sign(
   payload,
   String(process.env.JWT_KEY),
   { expiresIn: "1h" }
)

export const getTokenData = (
   token: string
): authenticationData | null => {
   try {

      const { id } = jwt.verify(
         token,
         String(process.env.JWT_KEY)
      ) as authenticationData

      return { id }
      
   } catch (error) {
      return null
   }
}