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
      // *** project id is generated not added by user! ***
      // projectID: req.body.projectID,
      name: req.body.name, 
      siteID: req.body.siteID, 
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
         
  // res.send(
  //           [
  //               {
  //                 projectID: "0000001",
  //                 title: "Trim Castle Field School",
  //                 imgSrc: "src/assets/IMAG0463.jpg",
  //                 location: "Location: Trim Castle, Trim, Co. Meath",
  //                 siteID: "Site ID: 2023000000021",
  //                 siteName: "Trim Castle Area 1",
  //                 licenceNumber: "202300020009",
  //                 director: "Sean Shannanan",
  //                 description:
  //                   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  //                 contractType: "Field School",
  //                 startDate: "10/October/2023",
  //               },
  //               {
  //                 projectID: "0000002",
  //                 title: "Kylemore Abbey  Capel L-Dar Preparation",
  //                 imgSrc: "src/assets/IMAG1100-EFFECTS.jpg",
  //                 location: "Location: Kylemore Abbey, Co. Galway",
  //                 siteID: "Site ID: 2023000000022",
  //                 siteName: "Kylemore Abbey  Capel L-Dar Preparation",
  //                 licenceNumber: "202300020076",
  //                 director: "Derric Mountain",
  //                 description:
  //                   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  //                 contractType: "Count Council",
  //                 startDate: "10/October/2023",
  //               },
  //               {
  //                 projectID: "0000003",
  //                 title: "Trim Castle Field School Winter Grads",
  //                 imgSrc: "src/assets/trimCastleSideImage.jpg",
  //                 location: "Location: Trim Castle, Trim, Co. Meath",
  //                 siteID: "Site ID: 2023000000023",
  //                 siteName: "Trim Castle",
  //                 licenceNumber: "202300020009",
  //                 director: "Sean Shannanan",
  //                 description:
  //                   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  //                 contractType: "Field School",
  //                 startDate: "10/October/2023",
  //               },
  //           ])
};

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

// TO DO:
// edit project function


export default {
  getAll,
  create,
  destroy,
  getOne,
  //edit
}