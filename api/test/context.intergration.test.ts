import projectController from "../src/controllers/project.controller";
import contextController from "../src/controllers/context.controller";
import { getMockRes, getMockReq } from "@jest-mock/express";
import { faker } from "@faker-js/faker";
import db from "../src/util/knex";
import { createRandomUserThroughAPI } from "./team.intergration.test";
import { createRandomProjectThroughAPI } from "./project.intergration.test";

export const createRandomContextThroughAPI = async () => {
  const user = await createRandomUserThroughAPI();
  const project = await createRandomProjectThroughAPI();

  const projectID = project.projectID;
  const type = 'Cut';
  const description = faker.word.words();
  const soilType = faker.person.fullName();
  const samples = "Yes";
  const location = faker.location.city();
  const date = faker.date.future();
  const userID = user.userID;

  const context = await createContextThroughAPI({
    projectID,
    type,
    description,
    soilType,
    samples,
    location,
    date,
    userID,
  });
  return context;
};
const createContextThroughAPI = async (data: any) => {
  const ctxReq = getMockReq({
    params: {
        projectID: data.projectID,
    },
    body: data,
  });

  const ctxRes = getMockRes();

  await contextController.create(ctxReq, ctxRes.res);

  const ctxResult = await db("Context")
    .where({ description: data.description })
    .first();
  return ctxResult;
};

describe("Project", () => {
  it("Correctly saves a project", async () => {
    const user = await createRandomUserThroughAPI();
    const project = await createRandomProjectThroughAPI();

    const projectID = project.projectID;
    const type = 'Cut';
    const description = faker.word.words();
    const soilType = faker.person.fullName();
    const samples = "Yes";
    const location = faker.location.city();
    const date = faker.date.future();
    const userID = user.userID;

    const ctxResult = await createContextThroughAPI({
      projectID,
      type,
      description,
      soilType,
      samples,
      location,
      date,
      userID,
    });
    expect(ctxResult).not.toBeUndefined();

    expect(ctxResult.projectID).toBe(projectID);
    expect(ctxResult.type).toBe(type);
    expect(ctxResult.description).toBe(description);
    expect(ctxResult.soilType).toBe(soilType);
    expect(ctxResult.samples).toBe(samples);
    expect(ctxResult.location).toBe(location);
    expect(new Date(ctxResult.date).getUTCDate()).toBe(date.getUTCDate());
    expect(ctxResult.userID).toBe(userID);
  });
});
