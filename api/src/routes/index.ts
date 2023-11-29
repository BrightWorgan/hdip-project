import userRoute from "./user";
import { Express } from 'express';
import loginRoute from "./login";
import projectRoute from "./projects";
import jwt from "jsonwebtoken";
import contextRoute from "./context";


const router = (app: Express) => {
    loginRoute(app);
    userRoute(app);
    projectRoute(app);
    contextRoute(app);
    // finds
    // etc
};

export default router;