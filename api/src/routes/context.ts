// CONTEXT
// get, post, remove?, update
import { type Express } from "express"
import db from "../util/knex";
import contextController from '../controllers/user.controller'

const contextRoute = (app:Express) => {
    app.get('/context',  contextController.getAll);
    app.post('/context', contextController.create);
    app.delete('/context', contextController.destroy); 
};

export default contextRoute;

// FINDS
// get, post, remove?, update

// SAMPLES
// get, post, remove?, update