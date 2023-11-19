import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   await knex.schema.createTable("Users", (userTable) => {
        userTable.increments("userID").unique().notNullable();
        userTable.string("forename");
        userTable.string("surname");
        userTable.string("number").unique();
        userTable.string("email").unique();
        userTable.string("address");
        userTable.string("town");
        userTable.string("county");
        userTable.string("eircode").unique();
        userTable.enum("education", ["Leaving Cert", "Level 5", "Level 6", "Level 7", "Level 8", "Masters / Level 9", "PHD / Level 10", "Student", "Other"]);
        userTable.enum("experience", ["General Operative", "Site Assisatant", "Supervisor", "Director", "Student", "Other" ]);
        userTable.enum("certs", ["Safe Pass", "Manual Handling", "First Aid"]);
        userTable.enum("driving", ["Yes", "No"]);
        userTable.enum("position",["General Operative", "Site Assisatant", "Supervisor", "Director", "Student", "Other"]);
        userTable.string("site");

    })
}


export async function down(knex: Knex): Promise<void> {
   await knex.schema.dropTable("Users");
}

