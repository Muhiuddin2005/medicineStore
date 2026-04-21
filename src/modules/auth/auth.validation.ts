import { z } from "zod";

const registerValidationSchema = z.object({
    body: z.object({
        name: z.string({
            message: "Name is required",
        }),
        email: z.string({
            message: "Email is required",
        }).email("Invalid email format"),
        password: z.string({
            message: "Password is required",
        }).min(6, "Password must be at least 6 characters"),
        role: z.enum(["CUSTOMER", "SELLER", "ADMIN"] as const).optional(),
    }),
});

const loginValidationSchema = z.object({
    body: z.object({
        email: z.string({
            message: "Email is required",
        }).email("Invalid email format"),
        password: z.string({
            message: "Password is required",
        }),
    }),
});

export const authValidation = {
    registerValidationSchema,
    loginValidationSchema,
};
