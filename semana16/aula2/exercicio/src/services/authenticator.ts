import * as jwt from 'jsonwebtoken'
import {authenticationData} from '../types';
import dotenv from 'dotenv'

dotenv.config()

const expiresIn = "10min";

export const generateToken = (payload: authenticationData): string =>{
    const token = jwt.sign(
        {
            id: payload.id,
            role: payload.role,

        },
        process.env.JWT_KEY!,
        {
            expiresIn
        }
    )
    return token
}

export const getTokenData = (
    token: string,
)=>{
    try {
        const rules = jwt.verify(token,process.env.JWT_KEY!) as authenticationData
        console.log(rules)

        return rules

    } catch (error) {
        console.log(error.message)
        return null
    }

}
 


