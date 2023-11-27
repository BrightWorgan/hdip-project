import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("Contexxt", (contextTable) => {
        contextTable.increments("contextNumber").unique().notNullable();
        contextTable.enum("Type", ["Cut", "Fill"]).notNullable();;
        contextTable.string("Description").notNullable();
        contextTable.string("Samples").notNullable();;
        contextTable.string("Location").notNullable();
        contextTable.dateTime("Date").notNullable();
      
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("Context");
}

