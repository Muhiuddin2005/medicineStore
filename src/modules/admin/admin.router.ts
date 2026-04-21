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

adminRouter.get("/medicines", auth("ADMIN"), AdminController.getAllMedicines);
adminRouter.get("/orders", auth("ADMIN"), AdminController.getAllOrders);
adminRouter.post("/categories", auth("ADMIN"), validateRequest(adminValidation.categorySchema), AdminController.createCategory);
adminRouter.put("/categories/:id", auth("ADMIN"), validateRequest(adminValidation.updateCategorySchema), AdminController.updateCategory);
adminRouter.delete("/categories/:id", auth("ADMIN"), AdminController.deleteCategory);

export default adminRouter;
