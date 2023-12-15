import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
  const allContexts = await db("Context")
    .select()
    .join('Users', 'Context.userID', '=', 'Users.userID') // joining User table to Context table
    .where({
        projectID: projectID
    });

    console.log(allContexts);
    res.send(allContexts)
    
};

const create = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
    try {
        await db("Context")
        .insert({
          type: req.body.type, 
          description: req.body.description,
          projectID: projectID,
          soilType: req.body.soilType,
          samples: req.body.samples,
          location: req.body.location,
          date: new Date(req.body.date), 
          userID: req.body.userID,
          }
        )
        res.send('Post Sucess'); 
      } catch (error: any) {
        console.log(error);
        res.status(500).send(error.message);
      }
    
};

// // TO DO:
// // edit user function
// // // update / edit user
// // app.patch('/user', (req, res) => {
// // })

const destroy = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
    await db('Context')
        .where({
            projectID: projectID,
        })
        .whereIn("contextNumber", req.body ?? [])
        .delete();
    res.send("Okay")

};

export default {
  getAll,
  create,
  destroy,
  //edit
}