import { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service.js";

const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await categoryService.getAllCategories();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

export const CategoryController = {
    getAllCategories
};
