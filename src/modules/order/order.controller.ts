import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service.js";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await orderService.createOrder(Number(req.user!.id), req.body);
        res.status(201).json({ success: true, message: "Order created successfully", data: result });
    } catch (error) {
        next(error);
    }
};

const getCustomerOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await orderService.getCustomerOrders(Number(req.user!.id));
        res.status(200).json({ success: true, message: "Orders retrieved successfully", data: result });
    } catch (error) {
        next(error);
    }
};

const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await orderService.getOrderById(Number(req.user!.id), Number(req.params.id));
        res.status(200).json({ success: true, message: "Order details retrieved successfully", data: result });
    } catch (error) {
        next(error);
    }
};

export const OrderController = {
    createOrder,
    getCustomerOrders,
    getOrderById
};
