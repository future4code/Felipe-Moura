import {v4} from 'uuid' //Importado somente o V4 do uuid

const generateId = ():string =>{
    return v4()
}
export default generateId

console.log('Generate ID', generateId())