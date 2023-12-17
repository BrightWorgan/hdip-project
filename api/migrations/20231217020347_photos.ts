import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("FindsImages", (assignTable) => {
    assignTable.increments("photoID").unique().notNullable();
    assignTable
      .integer("findNumber")
      .unsigned()
      .references("findNumber")
      .inTable("Find");
    assignTable.text("uri", "longtext").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("FindsImages");
}
