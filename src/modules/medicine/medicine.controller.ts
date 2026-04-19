import { NextFunction, Request, Response } from "express";
import { medicineService } from "./medicine.service.js";

const getAllMedicines = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await medicineService.getAllMedicines(req.query);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

const getMedicineById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await medicineService.getMedicineById(Number(req.params.id));
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

export const MedicineController = {
    getAllMedicines,
    getMedicineById
};
