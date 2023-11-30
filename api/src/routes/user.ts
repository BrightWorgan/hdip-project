import { type Express } from "express"
import userController from '../controllers/user.controller'

const userRoute = (app:Express) => {
    app.get('/user',  userController.getAll);
    app.delete('/user', userController.destroy);
    app.post('/user', userController.create);
};

export default userRoute;