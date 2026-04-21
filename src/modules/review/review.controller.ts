import { NextFunction, Request, Response } from "express";
import { reviewService } from "./review.service.js";
import paginationSortingHelper from "../../helpers/paginationSortingHelper.js";

const addReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { medicineId, rating, comment } = req.body;
        const result = await reviewService.addReview(Number(req.user?.id), medicineId, rating, comment);
        res.status(201).json({ success: true, message: "Review added successfully", data: result });
    } catch (error) {
        next(error);
    }
};

const getMedicineReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { medicineId } = req.params;
        const { page, limit } = paginationSortingHelper(req.query);
        const result = await reviewService.getMedicineReviews(Number(medicineId), page, limit);
        res.status(200).json({ success: true, message: "Reviews retrieved successfully", data: result.data, meta: result.meta });
    } catch (error) {
        next(error);
    }
};

export const ReviewController = {
    addReview,
    getMedicineReviews
};
