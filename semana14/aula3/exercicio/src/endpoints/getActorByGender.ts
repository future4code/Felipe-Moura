import connection from "../connection";

const getActorByGender = async (gender: string): Promise<any> => {
  const actors = await connection.raw(`
        SELECT COUNT (*) as count FROM Actor WHERE gender = '${gender}'
    `);

  return actors[0][0].count;
};
export default getActorByGender;
