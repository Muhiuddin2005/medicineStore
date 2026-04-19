import { Router } from "express";
import { OrderController } from "./order.controller.js";
import auth from "../../middlewares/auth.js";

const orderRouter = Router();

orderRouter.post('/', auth('CUSTOMER'), OrderController.createOrder);
orderRouter.get('/', auth('CUSTOMER'), OrderController.getCustomerOrders);
orderRouter.get('/:id', auth('CUSTOMER'), OrderController.getOrderById);

export default orderRouter;
