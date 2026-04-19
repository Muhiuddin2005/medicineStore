import { Router } from "express";
import { MedicineController } from "./medicine.controller.js";

const medicineRouter = Router();

medicineRouter.get('/', MedicineController.getAllMedicines);
medicineRouter.get('/:id', MedicineController.getMedicineById);

export default medicineRouter;
