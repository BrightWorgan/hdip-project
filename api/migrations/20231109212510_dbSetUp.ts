import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable("Users", (userTable) => {
        userTable.increments("userID").unique().notNullable();
        userTable.string("foreman").notNullable();
        userTable.string("surname").notNullable();
        userTable.integer("number").unique().notNullable();
        userTable.string("email").unique().notNullable();
        userTable.string("address").notNullable();
        userTable.string("town").notNullable();
        userTable.string("county").notNullable();
        userTable.string("eircode").unique().notNullable();
        userTable.enum("education", ["Leaving Cert", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9", "Level 10", "Other"]).notNullable();
        userTable.enum("experience", ["General Operative", "Site Assisatant", "Supervisor", "Director", "Student", "Other" ]).notNullable();
        userTable.enum("certs", ["Safe Pass", "Manual Handling", "First Aid"]).notNullable();
        userTable.boolean("driving").notNullable();
        userTable.enum("position",["General Operative", "Site Assisatant", "Supervisor", "Director", "Student", "Other"]).notNullable();
        userTable.string("site").notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable("Users");
}

