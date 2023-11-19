import userRoute from "./user";
import { Express } from 'express';


const router = (app: Express) => {
    // loginRoute(app);
    // app.use(authorization());
    userRoute(app);
    // projectRoute(app);
    // finds
    // etc
};

export default router;