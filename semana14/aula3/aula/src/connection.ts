//Configurações KNEX
import knex from "knex";

const connection = knex({
  //Criando conexão com o banco
  client: "mysql",
  connection: {
    host: "35.226.146.116",
    user: "felipe-moura",
    password: "WH2t1qgp9z5~LEY#5!Wg",
    database: "epps-felipe-moura",
    port: 3306,
    multipleStatements: true,
  },
});


export default connection