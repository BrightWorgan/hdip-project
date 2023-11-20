import userRoute from "./user";
import { Express } from 'express';
import loginRoute from "./login";
import projectRoute from "./projects";


const router = (app: Express) => {
    loginRoute(app);
    // app.use(authorization());
    userRoute(app);
    projectRoute(app);
    // finds
    // etc
};

export default router;