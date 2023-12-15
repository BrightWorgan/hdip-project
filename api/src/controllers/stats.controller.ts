import Express from "express";
import db from "../util/knex";

const get = async (req: Express.Request, res: Express.Response) => {
  try {
    const findStats = await db("Find")
      .select("material")
      .count("* as count")
      .groupBy("material");
    const projectStats = await db("Projects")
      .select("contract")
      .count("* as count")
      .groupBy("contract");
    const userStats = await db("Users")
      .select("position")
      .count("* as count")
      .groupBy("position");
    res.send({
      userStats,
      projectStats,
      findStats,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

export default {
  get,
};
