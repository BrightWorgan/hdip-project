import { type Express } from "express"
import loginController from '../controllers/login.controller'

const loginRoute = (app: Express) => {
    app.post('/login', loginController.login);

    app.use(loginController.validate);
};

export default loginRoute;