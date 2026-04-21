import { prisma } from "../../lib/prisma.js";

const addReview = async (customerId: number, medicineId: number, rating: number, comment?: string) => {
    const hasOrdered = await prisma.orderItem.findFirst({
        where: {
            medicineId: medicineId,
            order: {
                customerId: customerId,
            }
        }
    });

    if (!hasOrdered) {
        throw new Error("Forbidden! You can only review medicines you have purchased.");
    }

    const review = await prisma.review.create({
        data: {
            customerId,
            medicineId,
            rating,
            comment: comment || null
        }
    });

    return review;
};

const getMedicineReviews = async (medicineId: number, page: number, limit: number) => {
    const skip = (page - 1) * limit;

    const total = await prisma.review.count({ where: { medicineId } });
    
    const reviews = await prisma.review.findMany({
        where: { medicineId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
            customer: {
                select: { id: true, name: true }
            }
        }
    });

    return {
        data: reviews,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    };
};

export const reviewService = {
    addReview,
    getMedicineReviews
};
