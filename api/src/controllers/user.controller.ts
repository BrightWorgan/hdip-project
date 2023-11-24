import hash from "../util/hashing";
import db from "../util/knex";
import Express from "express";


const getAll = async (req: Express.Request, res: Express.Response) => {
  // const limit = req.params.limit;
  // const offset = req.params.offset;

  const limit = parseInt(req.query.limit as string, 10);
  const offset = parseInt(req.query.offset as string, 10);

  console.log('Limit is:', limit);
  console.log('Offset is:', offset);
  const allUsers = await db("Users")
    .select()
    .limit(limit)
    .offset(offset);
  res.send(allUsers)
};

const create = async (req: Express.Request, res: Express.Response) => {
    
  try {
    await db("Users")
    .insert({
      forename: req.body.name,
      surname: req.body.surname, 
      number: req.body.number, 
      email: req.body.email, 
      address: req.body.address, 
      town: req.body.townCity, 
      county: req.body.county, 
      eircode: req.body.eircode, 
      education: req.body.education, 
      experience: req.body.experience, 
      certs: req.body.certs, 
      driving: req.body.drive, 
      position: req.body.position, 
      site: req.body.site,
      password: hash(req.body.password)  }
    )
    res.send('Post Sucess'); 
  } catch (error: any) {
    res.status(500).send(error.message);
  }

};

const destroy = async (req: Express.Request, res: Express.Response) => {
    //user id
    // const userID = "00001"
    // const LookFor = (user:any) => {
    //   if (user.userID == userID)
    //     return true
    //   else{
    //     return false
    //   }
    // }
  
    // const selectedUser = users.findIndex(LookFor)
    // if (selectedUser === -1){
    //   throw new Error("User ID / User is not present in the system")
    // }
    // else {
    //   users.splice(selectedUser, 1)
    // }
    // db("Users").delete().where({

    // })
    res.send("Okay")

};

// TO DO:
// edit user function
// // update / edit user
// app.patch('/user', (req, res) => {

// })



export default {
  getAll,
  create,
  destroy,
  //edit
}