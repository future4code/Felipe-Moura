import * as bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export const generateHash = async (s: string): Promise<string> =>{
    const rounds: number = Number(process.env.BCRYPT_COST)
    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error("O cost precisa ser um numero")
    }

    const salt = await bcrypt.genSalt(rounds)

    const result = await bcrypt.hash(s, salt)
  

    return result

} 

export const compareHash = (s:string, hash:string): Promise<boolean> =>{
    return bcrypt.compare(s , hash)
}