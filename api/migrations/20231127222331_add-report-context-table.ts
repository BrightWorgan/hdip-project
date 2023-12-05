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

    await knex.schema.createTable("Find", (findTable) => {
        findTable.increments("findNumber").unique().notNullable();
        findTable.integer('contextNumber').unsigned().references('contextNumber').inTable('Context');
        findTable.integer('fillNumber').notNullable();
        findTable.string("description");
        findTable.string("material");
        findTable.string("photograph");
        findTable.string("bagged");
        findTable.dateTime("date").notNullable();
        findTable.integer('userID').unsigned().references('userID').inTable('Users');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("Context");
    await knex.schema.dropTable("Find");
}

