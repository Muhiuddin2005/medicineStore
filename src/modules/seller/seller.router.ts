import { Router } from "express";

const sellerRouter = Router();

sellerRouter.post('/medicines', (req, res) => { res.send("Add medicine"); });
sellerRouter.put('/medicines/:id', (req, res) => { res.send("Update medicine"); });
sellerRouter.delete('/medicines/:id', (req, res) => { res.send("Remove medicine"); });
sellerRouter.get('/orders', (req, res) => { res.send("Get seller orders"); });
sellerRouter.patch('/orders/:id', (req, res) => { res.send("Update order status"); });

export default sellerRouter;
