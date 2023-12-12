import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
    const allFinds = await db("Find")
    .select("Find.*", "Users.*", "Context.contextNumber")
    .join('Users', 'Find.userID', '=', 'Users.userID') // joining User table to Find table
    .join('Context', 'Find.contextNumber', '=', 'Context.contextNumber')
    .where({
        'Context.projectID': projectID
    })
    .orderBy("Find.findNumber", "asc");

    // console.log(allFinds);
    res.send(allFinds)
    
};

const getAllPerUser = async (req: Express.Request, res: Express.Response) => {
  // @ts-ignore
  const userID = req.user.userID;
  const allFindsPerUser = await db("Find")
  .select()
  .join('Users', 'Find.userID', '=', 'Users.userID') // joining User table to Find table
  .where({
      'Find.userID': userID
  })
  .orderBy("date", "desc")
  .limit(5);

  // console.log(allFindsPerUser);
  res.send(allFindsPerUser)
  
};


const create = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
    try {
        await db("Find")
        .insert({
            projectID: projectID,
            contextNumber: req.body.contextNumber, 
            fillNumber: req.body.fillNumber, 
            description: req.body.description,
            material: req.body.material,
            photograph: req.body.photograph,
            bagged: req.body.bagged,
            date: new Date(req.body.date), 
            userID: req.body.userID,
          }
        )
        res.send('Post Sucess'); 
      } catch (error: any) {
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
        }
      )
      .where({
        findNumber: findNumber
      })
      res.send('Patch Sucess'); 
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  
};

const destroy = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
    const contextID = req.params.contextID;
    const findNumber = req.params.findNumber;
    // TO DO:
    await db('Find')
        .where({
            projectID: projectID,
            contextNumber: contextID,
            findNumber: findNumber,
        })
        .delete();
    res.send("Okay")

};

export default {
  getAll,
  getAllPerUser,
  create,
  update,
  destroy,
}