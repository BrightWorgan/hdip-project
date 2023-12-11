import { type Express } from "express"
import projectController from "../controllers/project.controller";

const projectRoute = (app:Express) => {
    app.get('/project',  projectController.getAll);
    app.get('/project/:projectID', projectController.getOne);
    app.delete('/project', projectController.destroy);
    app.post('/project', projectController.create);
};

export default projectRoute;