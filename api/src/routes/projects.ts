import { type Express } from "express"
import db from "../util/knex";
import projectController from "../controllers/project.controller";

const projectRoute = (app:Express) => {
    app.get('/project',  projectController.getAll);
    app.delete('/project', projectController.destroy);
    app.post('/project', projectController.create);
};

export default projectRoute;