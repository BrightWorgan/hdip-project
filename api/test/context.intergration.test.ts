import projectController from "../src/controllers/project.controller"
import contextController from "../src/controllers/context.controller"
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
        
        
    })

    it("Correctly saves a context within the above project", async() =>{
        // Context needs: type, description, projectID, soilType, samples,location, date,  userID

        const projectID = faker.location.city();
        const type = faker.company.name();
        const description = faker.word.words();
        const soilType = faker.person.fullName();
        const samples = "Yes";
        const location = faker.location.city();
        const date = faker.date.future();
        const userID = faker.string.uuid();
        
        const req = getMockReq({  
            body:{
                projectID,
                type, 
                description, 
                soilType,
                samples, 
                location,
                date, 
                userID 
            }
        });

        const res = getMockRes();

        await contextController.create(req, res.res);

        const result = await db("Context").where({description}).first();
        expect(result).not.toBeUndefined();

        expect(result.projectID).toBe(projectID);
        expect(result.type).toBe(type);
        expect(result.description).toBe(description);
        expect(result.soilType).toBe(soilType);
        expect(result.samples).toBe(samples);
        expect(result.location).toBe(location);
        expect(new Date(result.date).getUTCDate()).toBe(date.getUTCDate());
        expect(result.userID).toBe(userID);
    })
});