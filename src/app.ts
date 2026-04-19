import express, { Application } from "express";
import cors from 'cors';
import errorHandler from "./middlewares/globalErrorHandler.js";
import { notFound } from "./middlewares/notFound.js";

import authRouter from "./modules/auth/auth.router.js";
import medicineRouter from "./modules/medicine/medicine.router.js";
import categoryRouter from "./modules/category/category.router.js";
import orderRouter from "./modules/order/order.router.js";
import sellerRouter from "./modules/seller/seller.router.js";
import adminRouter from "./modules/admin/admin.router.js";

const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000",
    credentials: true
}))

app.use(express.json());

// Main Routes
app.use("/api/auth", authRouter);
app.use("/api/medicines", medicineRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
    res.send("Pharmacy API is running!");
});

app.use(notFound)
app.use(errorHandler)

export default app;
