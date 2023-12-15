import userController from "../src/controllers/user.controller"
import {getMockRes, getMockReq} from "@jest-mock/express"
import {faker} from "@faker-js/faker"
import db from "../src/util/knex"

describe("Users", () => {
    it("Correctly saves a Users", async() => {
        const forename = faker.person.firstName();
        const surname = faker.person.lastName();
        const number = faker.phone.number();
        const email =faker.internet.email();
        const address = faker.location.streetAddress();
        const town = faker.location.city();
        const county = faker.location.county();
        const eircode = faker.location.zipCode();
        const education = "Level 8";
        const training = "All";
        const driving = "Yes";
        const position = "Director"
        const site = faker.location.city();
        const password = faker.string.uuid();

        const req = getMockReq({
            
            body:{
                forename,
                surname,
                number,
                email,
                address, 
                town, 
                county, 
                eircode, 
                education, 
                training, 
                driving, 
                position, 
                site,
                password
            }
        });

        const res = getMockRes();

        await userController.create(req, res.res);
        
        const result = await db("Users").where({email}).first();
        // expect(result).not.toBeUndefined();
        expect(result.forename).toBe(forename);
        expect(result.surname).toBe(surname);
        expect(result.number).toBe(number);
        expect(result.email).toBe(email);
        expect(result.address).toBe(address);
        expect(result.town).toBe(town);
        expect(result.county).toBe(county);
        expect(result.eircode).toBe(eircode);
        expect(result.education).toBe(education);
        expect(result.training).toBe(training);
        expect(result.county).toBe(county);
        expect(result.driving).toBe(driving);
        expect(result.position).toBe(position);
        expect(result.password).toBe(password);
        
    })
})