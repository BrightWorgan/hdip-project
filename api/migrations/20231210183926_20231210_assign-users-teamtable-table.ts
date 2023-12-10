import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("Assignment", (assignTable) => {
        assignTable.increments("assignmentID").unique().notNullable();
        assignTable.integer('userID').unsigned().references('userID').inTable('Users');
        assignTable.integer('projectID').unsigned().references('projectID').inTable('Projects');
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("Assignment");
}

