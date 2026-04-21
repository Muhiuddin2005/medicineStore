import { z } from "zod";

const addMedicineSchema = z.object({
    body: z.object({
        name: z.string({
            message: "Medicine name is required",
        }),
        description: z.string({
            message: "Description is required",
        }),
        price: z.number({
            message: "Price is required",
        }).positive("Price must be a positive number"),
        stock: z.number({
            message: "Stock is required",
        }).int().min(0, "Stock cannot be negative"),
        categoryId: z.number({
            message: "Category ID is required",
        }).int(),
    }),
});

const updateMedicineSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().positive("Price must be a positive number").optional(),
        stock: z.number().int().min(0, "Stock cannot be negative").optional(),
        categoryId: z.number().int().optional(),
    }),
});

const updateOrderStatusSchema = z.object({
    body: z.object({
        status: z.enum(["PLACED", "PROCESSING", "CANCELLED", "SHIPPED", "DELIVERED"] as const),
    }),
});

export const sellerValidation = {
    addMedicineSchema,
    updateMedicineSchema,
    updateOrderStatusSchema,
};
