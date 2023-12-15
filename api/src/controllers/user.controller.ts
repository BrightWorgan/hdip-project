import hash from "../util/hashing";
import db from "../util/knex";
import Express from "express";

const getAll = async (req: Express.Request, res: Express.Response) => {
  const limit = parseInt(req.query.limit as string, 10);
  const offset = parseInt(req.query.offset as string, 10);
  const position = req.query.position as string;
  const search = req.query.search as string;

  console.log("Limit is:", limit);
  console.log("Offset is:", offset);

  const query = db("Users").select().limit(limit).offset(offset);
  //
  if (position !== undefined) {
    query.whereNot({
      position: position,
    });
  }

  // wildcard search
  if (search) {
    // and (where like %% or like %%)
    query.andWhere((sub) => {
      sub
        .whereILike("forename", `%${search}%`)
        .orWhereILike("surname", `%${search}%`);
    });
  }

  const allUsers = await query;
  res.send(allUsers);
};

const create = async (req: Express.Request, res: Express.Response) => {
  try {
    await db("Users").insert({
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
      training: req.body.training,
      driving: req.body.drive,
      position: req.body.position,
      site: req.body.site,
      password: hash(req.body.password),
    });
    res.send("Post Sucess");
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

// edit / update user function
const update = async (req: Express.Request, res: Express.Response) => {
  try {
    await db("Users")
      .update({
        surname: req.body.surname,
        address: req.body.address,
        town: req.body.townCity,
        county: req.body.county,
        eircode: req.body.eircode,
        education: req.body.education,
        training: req.body.training,
        driving: req.body.drive,
        position: req.body.position,
        site: req.body.site,
      })
      .whereIn("userID", req.body ?? []);

    res.send("Patch Sucess");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req: Express.Request, res: Express.Response) => {
  try {
    console.log(req.body);
    await db("Users")
      .delete()
      .whereIn("userID", req.body ?? []);

    res.send("Removal Sucess");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default {
  getAll,
  create,
  update,
  destroy,
};
