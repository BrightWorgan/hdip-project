//database
import knex from "knex";

const db = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    port : parseInt(process.env.DB_PORT ?? "0", 10),
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : 'SheetScribe'
  }
});

export default db;
