import connection from "../connection";

const getActorByName = async (name: string): Promise<any> => {
  const actors = await connection.raw(`
            SELECT * FROM Actor WHERE (name LIKE '${name}%')
    `);

  return actors[0];
};
export default getActorByName;
