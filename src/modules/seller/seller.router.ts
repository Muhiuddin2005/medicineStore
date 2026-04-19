import { Router } from "express";
import { SellerController } from "./seller.controller.js";
import auth from "../../middlewares/auth.js";

const sellerRouter = Router();
sellerRouter.post('/medicines', auth('SELLER'), SellerController.addMedicine);
sellerRouter.put('/medicines/:id', auth('SELLER'), SellerController.updateMedicine);
sellerRouter.delete('/medicines/:id', auth('SELLER'), SellerController.removeMedicine);
sellerRouter.get('/orders', auth('SELLER'), SellerController.getSellerOrders);
sellerRouter.patch('/orders/:id', auth('SELLER'), SellerController.updateOrderStatus);

export default sellerRouter;
