import * as bcrypt from 'bcryptjs'
import doenvt from 'dotenv'

doenvt.config()

export const hash = async (s:string): Promise<string> =>{
    //Definindo a complexidadade
    const rounds: number = Number(process.env.BCRYPT_COST)
    if(isNaN(Number(process.env.BCRYPT_COST))){
        throw new Error ("O cost precisa ser um número")
    }

    //gerar o salt
    const salt = await bcrypt.genSalt(rounds)
    //Escondendo a senha
    const result = await bcrypt.hash(s, salt)

    return result
}

//Compare 

export const compare = (s: string, hash:string): Promise<boolean> =>{
    return  bcrypt.compare(s, hash)
}