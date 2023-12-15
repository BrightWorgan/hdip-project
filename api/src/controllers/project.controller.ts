import db from "../util/knex";
import Express from "express";

// get, post, remove?, update
const getAll = async (req: Express.Request, res: Express.Response) => {
  // @ts-ignore
  const user = req.user;
  if (user.position === 'Director') {
    const allProjects = await db("Projects")
      .select()
    res.send(allProjects)
    return;
  }

  const allProjects = await db("Projects")
    .join('Assignment', (join) => {
      join.on('Assignment.projectID', '=', 'Projects.projectID')
        .andOn('Assignment.userID', '=', user.userID)
    })
    .select('Projects.*');
  res.send(allProjects);
    
};

const create = async (req: Express.Request, res: Express.Response) => {
  try {
    await db("Projects")
    .insert({
      name: req.body.name, 
      projectLocation: req.body.projectLocation, 
      director: req.body.director, 
      startDate: new Date (req.body.startDate), 
      description: req.body.description, 
      contract: req.body.contract, 
      licenceNumber:req.body.licenceNumber,  }
    )
    res.send('Post Sucess'); 
  } catch (error: any) {
    res.status(500).send(error.message);
  }

};

// TO DO:
// edit project function

const destroy = async (req: Express.Request, res: Express.Response) => {
  await db("Projects").delete().whereIn("projectID", req.body)
    res.send("Okay")
};

const getOne = async (req: Express.Request, res: Express.Response) => {
  const projectID = req.params.projectID;

  const project = await db("Projects")
    .where({
      projectID: projectID
    })
    .first();
  res.send(project);
}

export default {
  getAll,
  create,
  destroy,
  getOne,
  //edit
}