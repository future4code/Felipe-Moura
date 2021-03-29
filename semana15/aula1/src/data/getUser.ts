import conneciton from'../connection'


//filtro nome e tipo 
//ordenadar por nome e em ordem decrente
//começar na pagina um

export default async function getUser(name: string, type: string, orderby: string,ordertype:string, limit: number, offset: number) {
    const result = await conneciton
    .select(name)
    .from("aula48_exercicio")
    .orderBy(orderby, ordertype)
    .limit(limit)
    .offset(offset)

    return(result)
}