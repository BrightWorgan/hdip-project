import userRoute from "./user";
import { Express } from 'express';
import loginRoute from "./login";
import projectRoute from "./projects";
import contextRoute from "./context";
import findRoute from "./finds";


const router = (app: Express) => {
    loginRoute(app);
    userRoute(app);
    projectRoute(app);
    contextRoute(app);
    findRoute(app);
};

export default router;