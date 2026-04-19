import { Router } from "express";
import { AdminController } from "./admin.controller.js";
import auth from "../../middlewares/auth.js";

const adminRouter = Router();

adminRouter.get('/users', auth('ADMIN'), AdminController.getAllUsers);
adminRouter.patch('/users/:id', auth('ADMIN'), AdminController.toggleUserStatus);

export default adminRouter;
