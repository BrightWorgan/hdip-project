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
        contextTable.integer('userID').unsigned().references('userID').inTable('Users');
    })

    await knex.schema.createTable("Find", (contextTable) => {
        contextTable.increments("findNumber").unique().notNullable();
        contextTable.integer('contextNumber').unsigned().references('contextNumber').inTable('Context');
        contextTable.integer('fillNumber').notNullable();
        contextTable.string("description");
        contextTable.string("material");
        contextTable.string("photograph");
        contextTable.string("bagged");
        contextTable.dateTime("date").notNullable();
        contextTable.integer('projectID').unsigned().references('projectID').inTable('Projects');
        contextTable.integer('userID').unsigned().references('userID').inTable('Users');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("Context");
    await knex.schema.dropTable("Find");
}

