import { z } from "zod";

const toggleUserStatusSchema = z.object({
    body: z.object({
        status: z.boolean({ message: "Status is required and must be a boolean value" }),
    }),
});

export const adminValidation = {
    toggleUserStatusSchema,
};
