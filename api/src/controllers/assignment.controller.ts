import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.params.projectID;
  const allAssignments = await db("Assignment")
    .select()
    .where({
        projectID: projectID
    });

    console.log(allAssignments);
    res.send(allAssignments)
};

const set = async (req: Express.Request, res: Express.Response) => {
    const projectID = req.body.projectID;
    const userID = req.body.userID;
    //try catch
    console.log("Getting here");

    const isSelected = await db("Assignment")
    .select()
    .where({
        projectID: projectID,
        userID: userID
    })
    .first()

    if(isSelected === undefined){
        await db("Assignment").insert({
            projectID: projectID,
            userID: userID
        })
    }
    else{
        await db("Assignment").where({
            projectID: projectID,
            userID: userID
        }).delete()
    }

    res.send("okay");

};

export default{
    getAll,
    set
}