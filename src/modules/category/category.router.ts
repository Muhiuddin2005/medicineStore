import { Router } from "express";
import { CategoryController } from "./category.controller.js";

const categoryRouter = Router();

categoryRouter.get('/', CategoryController.getAllCategories);

export default categoryRouter;
