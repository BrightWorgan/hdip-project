import { type Express } from "express"
import assignmentController from '../controllers/assignment.controller'

const assignmentRoute = (app:Express) => {
    app.get('/assignments/:projectID',  assignmentController.getAll);
    app.put('/assignments', assignmentController.set);
   
};
export default assignmentRoute;


