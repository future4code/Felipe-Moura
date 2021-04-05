import * as jwt from 'jsonwebtoken'
import {authenticationData, user} from '../types';
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "10min";

export const generateToken = (payload: authenticationData): string =>{
    return jwt.sign(
            payload,
            process.env.JWT_KEY!,
            {
                expiresIn
            }
    )
}

export const getTokenData = (
    token: string
): authenticationData | null =>{
    try {
        const{id} = jwt.verify(token,process.env.JWT_KEY!) as authenticationData

        return {id}

        
    } catch (error) {
        console.log(error.message)
        return null
    }

}
 


