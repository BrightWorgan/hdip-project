import { type Express } from "express"
import db from "../util/knex";
import loginController from '../controllers/login.controller'

const loginRoute = (app:Express) => {
    app.post('/login', loginController.login);
};

export default loginRoute;