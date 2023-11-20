import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable("Users", (userTable) => {
        userTable.increments("userID").unique().notNullable();
        userTable.string("forename").notNullable();;
        userTable.string("surname").notNullable();;
        userTable.string("number").unique().notNullable();;
        userTable.string("email").unique().notNullable();;
        userTable.string("address");
        userTable.string("town");
        userTable.string("county").notNullable();;
        userTable.string("eircode").unique().notNullable();;
        userTable.enum("education", ["Leaving Cert", "Level 5", "Level 6", "Level 7", "Level 8", "Masters / Level 9", "PHD / Level 10", "Student", "Other"]).notNullable();;
        userTable.enum("experience", ["General Operative", "Site Assisatant", "Supervisor", "Director", "Student", "Other" ]).notNullable();;
        userTable.enum("certs", ["Safe Pass", "Manual Handling", "First Aid"]).notNullable();;
        userTable.enum("driving", ["Yes", "No"]).notNullable();
        userTable.enum("position",["General Operative", "Site Assisatant", "Supervisor", "Director", "Student", "Other"]).notNullable();;
        userTable.string("site");
        userTable.string("password");

    })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable("Users");
}

