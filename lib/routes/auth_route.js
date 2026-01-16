import express from 'express'
import AuthController from '../controller/auth_controller.js';


const AuthRouter = express.Router();

AuthRouter.post('/auth',AuthController.login);
AuthRouter.post('/sign',AuthController.sign);

export default AuthRouter;

