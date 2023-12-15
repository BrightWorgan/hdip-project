import projectController from "../src/controllers/project.controller"
import contextController from "../src/controllers/context.controller"
import findsController from "../src/controllers/finds.controller"
import {getMockRes, getMockReq} from "@jest-mock/express"
import {faker} from "@faker-js/faker"
import db from "../src/util/knex"
import { createRandomUserThroughAPI } from "./team.intergration.test"
import { createRandomProjectThroughAPI } from "./project.intergration.test"
import { createRandomContextThroughAPI } from "./context.intergration.test"

describe("Find", () => {

    it("Correctly saves a find within the a project / context", async() =>{
        const user = await createRandomUserThroughAPI();
        const context = await createRandomContextThroughAPI();

        // Find  needs: findNumber, contextNumber, fillNumber, description, material, photograph, bagged, date, userID
        const contextNumber = context.contextNumber;
        const fillNumber = faker.number.int({ max: 10000 });
        const description = faker.word.words();
        const material = faker.person.fullName();
        const photograph = "Yes";
        const bagged = "Yes";
        const date = faker.date.future();
        const userID = user.userID;
        
        const req = getMockReq({  
            body:{
                // findNumber,
                contextNumber,
                fillNumber,
                description, 
                material,
                photograph, 
                bagged,
                date, 
                userID 
            }
        });

        const res = getMockRes();

        await findsController.create(req, res.res);

        expect(res.res.send).toHaveBeenCalledTimes(1);

        const result = await db("Find").where({description}).first();
        expect(result).not.toBeUndefined();

        expect(result.contextNumber).toBe(contextNumber);
        expect(result.fillNumber).toBe(fillNumber);
        expect(result.description).toBe(description);
        expect(result.material).toBe(material);
        expect(result.photograph).toBe(photograph);
        expect(result.bagged).toBe(bagged);
        expect(new Date(result.date).getUTCDate()).toBe(date.getUTCDate());
        expect(result.userID).toBe(userID);
    })

    it("Correctly fails if contextNumber is not valid", async() =>{
        const user = await createRandomUserThroughAPI();
        const context = await createRandomContextThroughAPI();

        // Find  needs: findNumber, contextNumber, fillNumber, description, material, photograph, bagged, date, userID
    
        const contextNumber = 'Not a valid context number';
        const fillNumber = faker.number.int({ max: 10000 });
        const description = faker.word.words();
        const material = faker.person.fullName();
        const photograph = "Yes";
        const bagged = "Yes";
        const date = faker.date.future();
        const userID = user.userID;
        
        const req = getMockReq({  
            body:{
                // findNumber,
                contextNumber,
                fillNumber,
                description, 
                material,
                photograph, 
                bagged,
                date, 
                userID 
            }
        });

        const res = getMockRes();

        await findsController.create(req, res.res);

        expect(res.res.status).toHaveBeenCalledTimes(1);
    })
});