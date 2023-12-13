import { type Express } from "express"
import findController from '../controllers/finds.controller'

const findRoute = (app:Express) => {
    app.get('/find/:projectID',  findController.getAll);
    app.get('/find-me',  findController.getAllPerUser);
    app.post('/find/:projectID', findController.create);
    app.patch('/find/:findNumber', findController.update);
    app.delete('/find/:projectID/:contextID', findController.destroy); 
};
export default findRoute;

