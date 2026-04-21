import { Router } from "express";
import { AdminController } from "./admin.controller.js";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { adminValidation } from "./admin.validation.js";

const adminRouter = Router();

adminRouter.get("/users", auth("ADMIN"), AdminController.getAllUsers);
adminRouter.patch(
  "/users/:id",
  auth("ADMIN"),
  validateRequest(adminValidation.toggleUserStatusSchema),
  AdminController.toggleUserStatus,
);

export default adminRouter;
