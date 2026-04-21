import { z } from "zod";

const createReviewSchema = z.object({
    body: z.object({
        rating: z.number({ message: "Rating is required" }).int().min(1, "Minimum rating is 1").max(5, "Maximum rating is 5"),
        medicineId: z.number({ message: "Medicine ID is required and must be a number" }).int(),
        comment: z.string().optional(),
    }),
});

export const reviewValidation = {
    createReviewSchema,
};
