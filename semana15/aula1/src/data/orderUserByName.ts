import conneciton from '../connection'

export default async function orderByName(orderBy:string,orderType:string) {
  
    const result = await conneciton.raw(`
        SELECT * FROM aula48_exercicio ORDER BY ${orderBy} ${orderType}
    `)
    console.log(result)
    return result[0]
}