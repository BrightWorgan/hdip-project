import { type Express } from "express"
import db from "../util/knex";
import projectController from "../controllers/project.controller";

const projectRoute = (app:Express) => {
    app.get('/user',  projectController.getAll);
    app.delete('/user', projectController.destroy);
    app.post('/user', projectController.create);
};

export default projectRoute;