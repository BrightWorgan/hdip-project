import { type Express } from "express"
import contextController from '../controllers/context.controller'

const contextRoute = (app:Express) => {
    app.get('/context/:projectID',  contextController.getAll);
    app.post('/context/:projectID', contextController.create);
    app.delete('/context/:projectID', contextController.destroy); 
};
export default contextRoute;