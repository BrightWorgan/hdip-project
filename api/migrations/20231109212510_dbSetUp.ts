import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable("Users", (userTable) => {
        userTable.increments("userID").unique().notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable("Users");
}

