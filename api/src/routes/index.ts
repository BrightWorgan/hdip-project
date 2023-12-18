import userRoute from "./user";
import { Express } from "express";
import loginRoute from "./login";
import projectRoute from "./projects";
import contextRoute from "./context";
import findRoute from "./finds";
import assignmentRoute from "./assignment";
import statsRoute from "./stats";

const router = (app: Express) => {
  loginRoute(app);
  statsRoute(app);
  userRoute(app);
  projectRoute(app);
  contextRoute(app);
  findRoute(app);
  assignmentRoute(app);
};

export default router;
