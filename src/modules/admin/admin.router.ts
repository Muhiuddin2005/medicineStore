import { Router } from "express";

const adminRouter = Router();

adminRouter.get('/users', (req, res) => { res.send("Get all users"); });
adminRouter.patch('/users/:id', (req, res) => { res.send("Update user status"); });

export default adminRouter;
