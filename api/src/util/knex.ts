import knex from "knex";

// test database
let dbName = process.env.DB_NAME;

 if (process.env.IS_TEST === "true"){
    dbName = process.env.DB_TEST_Name
 };


const db = knex({
  client: 'mysql2',
  connection: {
    host : process.env.DB_HOST,
    port : parseInt(process.env.DB_PORT ?? "0", 10),
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : dbName
  }
});



export default db;
