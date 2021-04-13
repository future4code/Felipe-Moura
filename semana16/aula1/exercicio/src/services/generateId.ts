import {v4} from 'uuid' //Importado somente o V4 do uuid
import { authenticationData } from '../types'

const generateId = ():string =>{
    return v4()
}
export default generateId

