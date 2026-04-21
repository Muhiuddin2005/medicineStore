import { NextFunction, Request, Response } from "express";
import { adminService } from "./admin.service.js";
import paginationSortingHelper from "../../helpers/paginationSortingHelper.js";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { page, limit } = paginationSortingHelper(req.query);
        const result = await adminService.getAllUsers(page, limit);
        res.status(200).json({ success: true, message: "Users retrieved successfully", data: result.data, meta: result.meta });
    } catch (error) {
        next(error);
    }
};

const toggleUserStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const status = Boolean(req.body.status);
        const result = await adminService.toggleUserStatus(Number(req.params.id), status);
        res.status(200).json({ success: true, message: "User status updated successfully", data: result });
    } catch (error) {
        next(error);
    }
};

const getAllMedicines = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { page, limit } = paginationSortingHelper(req.query);
        const result = await adminService.getAllMedicines(page, limit);
        res.status(200).json({ success: true, message: "Medicines retrieved successfully", data: result.data, meta: result.meta });
    } catch (error) { next(error); }
};

const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { page, limit } = paginationSortingHelper(req.query);
        const result = await adminService.getAllOrders(page, limit);
        res.status(200).json({ success: true, message: "Orders retrieved successfully", data: result.data, meta: result.meta });
    } catch (error) { next(error); }
};

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await adminService.createCategory(req.body.name);
        res.status(201).json({ success: true, message: "Category created successfully", data: result });
    } catch (error) { next(error); }
};

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await adminService.updateCategory(Number(req.params.id), req.body);
        res.status(200).json({ success: true, message: "Category updated successfully", data: result });
    } catch (error) { next(error); }
};

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await adminService.deleteCategory(Number(req.params.id));
        res.status(200).json({ success: true, message: "Category deleted successfully", data: result });
    } catch (error) { next(error); }
};

export const AdminController = {
    getAllUsers,
    toggleUserStatus,
    getAllMedicines,
    getAllOrders,
    createCategory,
    updateCategory,
    deleteCategory
};
