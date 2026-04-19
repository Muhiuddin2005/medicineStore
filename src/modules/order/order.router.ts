import { Router } from "express";

const orderRouter = Router();

orderRouter.post('/', (req, res) => { res.send("Create new order"); });
orderRouter.get('/', (req, res) => { res.send("Get user orders"); });
orderRouter.get('/:id', (req, res) => { res.send("Get order details"); });

export default orderRouter;
