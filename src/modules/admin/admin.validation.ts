import { z } from "zod";

const toggleUserStatusSchema = z.object({
    body: z.object({
        status: z.boolean({ message: "Status is required and must be a boolean value" }),
    }),
});

const categorySchema = z.object({
    body: z.object({
        name: z.string({ message: "Category name is required" }),
    }),
});

const updateCategorySchema = z.object({
    body: z.object({
        name: z.string({ message: "Category name is required" }).optional(),
    }),
});

export const adminValidation = {
    toggleUserStatusSchema,
    categorySchema,
    updateCategorySchema
};
