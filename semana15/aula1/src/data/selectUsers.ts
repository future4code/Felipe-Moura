import conneciton from '../connection'

export default async function selectUser(limit: number, offset:number): Promise<any> {
    const result = await conneciton
    .select('*')
    .from('aula48_exercicio')
    .limit(limit)
    .offset(offset)

    console.log(result)
    return result
}