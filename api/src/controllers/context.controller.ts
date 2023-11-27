import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
  const allContexts = await db("Context")
    .select()
    res.send(allContexts)
};

const create = async (req: Express.Request, res: Express.Response) => {
    try {
        await db("Context")
        .insert({
          contextNumber: req.body.contextNumber,
          type: req.body.type, 
          description: req.body.description,
          soilType: req.body.soilType,
          samples: req.body.samples,
          location: req.body.location,
          date:  new Date (req.body.date), 
          }
        )
        res.send('Post Sucess'); 
      } catch (error: any) {
        res.status(500).send(error.message);
      }
    
};

const destroy = async (req: Express.Request, res: Express.Response) => {
    // TO DO:
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