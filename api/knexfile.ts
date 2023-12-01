import type { Knex } from "knex";
import "dotenv/config";

// DB stuff

const config: { [key: string]: Knex.Config } = {
  dev: {
    client: "mysql2",
    connection: {
      host : process.env.DB_HOST,
      port : parseInt(process.env.DB_PORT ?? "0", 10),
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : 'SheetScribe'
    },
    
    migrations: {
      tableName: "knex_migrations"
    }
  },

};

module.exports = config;