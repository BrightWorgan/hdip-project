import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("Context", (contextTable) => {
        contextTable.increments("contextNumber").unique().notNullable();
        contextTable.enum("type", ["Cut", "Fill"]).notNullable();;
        contextTable.string("description").notNullable();
        contextTable.string("soilType").notNullable();
        contextTable.string("samples").notNullable();;
        contextTable.string("location").notNullable();
        contextTable.dateTime("date").notNullable();
        contextTable.integer('projectID').unsigned().references('projectID').inTable('Projects');
        contextTable.string('userID').unsigned().references('userID').inTable('Users');
      
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("Context");
}

