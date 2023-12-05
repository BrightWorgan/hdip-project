import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
    const allFinds = await db("Find")
    .select()
    .join('Users', 'Find.userID', '=', 'Users.userID') // joining User table to Find table
    .join('Context', 'Find.contextNumber', '=', 'Context.contextNumber')
    .where({
        'Context.projectID': projectID
    });

    console.log(allFinds);
    res.send(allFinds)
    
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

// // TO DO:
// // edit user function
// // // update / edit user
// // app.patch('/user', (req, res) => {

// // })



export default {
  getAll,
  create,
  destroy,
  //edit
}