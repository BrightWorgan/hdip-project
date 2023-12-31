import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
  const projectID = req.params.projectID;
  const allFinds = await db("Find")
    .select("Find.*", "Users.*", "Context.contextNumber")
    .join("Users", "Find.userID", "=", "Users.userID") // joining User table to Find table
    .join("Context", "Find.contextNumber", "=", "Context.contextNumber")
    .where({
      "Context.projectID": projectID,
    })
    .orderBy("Find.findNumber", "asc");
  res.send(allFinds);
};

const getAllImages = async (req: Express.Request, res: Express.Response) => {
  const findNumber = req.params.findNumber;

  const allImages = await db("FindsImages").select().where({
    findNumber: findNumber,
  });
  res.send(allImages);
};

const getAllPerUser = async (req: Express.Request, res: Express.Response) => {
  // @ts-ignore
  const userID = req.user.userID;
  const limit = parseInt(req.params.limit ?? "5");
  const allFindsPerUser = await db("Find")
    .select("Find.*", "Users.*", "Context.projectID")
    .join("Users", "Find.userID", "=", "Users.userID") // joining User table to Find table
    .join("Context", "Find.contextNumber", "=", "Context.contextNumber")
    .where({
      "Find.userID": userID,
    })
    .orderBy("date", "desc")
    .limit(limit);
  res.send(allFindsPerUser);
};

const create = async (req: Express.Request, res: Express.Response) => {
  try {
    await db("Find").insert({
      contextNumber: req.body.contextNumber,
      fillNumber: req.body.fillNumber,
      description: req.body.description,
      material: req.body.material,
      photograph: req.body.photograph,
      bagged: req.body.bagged,
      date: new Date(req.body.date),
      userID: req.body.userID,
    });
    res.send("Post Sucess");
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const update = async (req: Express.Request, res: Express.Response) => {
  const findNumber = req.params.findNumber;
  try {
    await db("Find")
      .update({
        contextNumber: req.body.contextNumber,
        fillNumber: req.body.fillNumber,
        description: req.body.description,
        material: req.body.material,
        photograph: req.body.photograph,
        bagged: req.body.bagged,
        date: new Date(req.body.date),
      })
      .where({
        findNumber: findNumber,
      });
    res.send("Patch Sucess");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const photo = async (req: Express.Request, res: Express.Response) => {
  try {
    await db("FindsImages").insert({
      findNumber: req.body.findNumber,
      uri: req.body.uri,
    });
    res.send("Okay");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req: Express.Request, res: Express.Response) => {
  const projectID = req.params.projectID;
  const contextID = req.params.contextID;
  const findNumber = req.params.findNumber;
  await db("Find")
    .where({
      projectID: projectID,
      contextNumber: contextID,
      findNumber: findNumber,
    })
    .delete();
  res.send("Okay");
};

export default {
  getAll,
  getAllPerUser,
  getAllImages,
  create,
  photo,
  update,
  destroy,
};
