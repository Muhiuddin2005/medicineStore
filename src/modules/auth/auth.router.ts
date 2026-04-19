import { Router } from "express";
import { AuthController } from "./auth.controller.js";
import auth from "../../middlewares/auth.js";

const authRouter = Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);
authRouter.get('/me', auth(), AuthController.getMe);

export default authRouter;
