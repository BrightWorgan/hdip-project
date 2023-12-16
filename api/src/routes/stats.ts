import { type Express } from "express"
import statsController from "../controllers/stats.controller";

const statsRoute = (app:Express) => {
    app.get('/stats',  statsController.get);
};

export default statsRoute;