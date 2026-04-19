import { Router } from "express";

const authRouter = Router();

authRouter.post('/register', (req, res) => { res.send("Register API"); });
authRouter.post('/login', (req, res) => { res.send("Login API"); });
authRouter.get('/me', (req, res) => { res.send("Current User API"); });

export default authRouter;
