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

export const AdminController = {
    getAllUsers,
    toggleUserStatus
};
