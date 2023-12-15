import projectController from "../src/controllers/project.controller"
import {getMockRes, getMockReq} from "@jest-mock/express"
import {faker} from "@faker-js/faker"
import db from "../src/util/knex"

describe("Project", () => {
    it("Correctly saves a project", async() => {
        const name = faker.company.name();
        const projectLocation = faker.location.city();
        const director = faker.person.fullName();
        const startDate = faker.date.future();
        const description = faker.word.words();
        const contract = "Public";
        const licenceNumber = faker.string.uuid();

        const req = getMockReq({  
            body:{
                name, 
                projectLocation,
                director,
                startDate, 
                description, 
                contract, 
                licenceNumber
            }
        });

        const res = getMockRes();

        await projectController.create(req, res.res);
        
        const result = await db("Projects").where({name}).first();
        expect(result).not.toBeUndefined();
        expect(result.name).toBe(name);
        expect(result.projectLocation).toBe(projectLocation);
        expect(result.director).toBe(director);
        expect(new Date(result.startDate).getUTCDate()).toBe(startDate.getUTCDate());
        expect(result.description).toBe(description);
        expect(result.contract).toBe(contract);
        expect(result.licenceNumber).toBe(licenceNumber);
    })
})