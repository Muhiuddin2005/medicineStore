import { prisma } from "../../lib/prisma.js";

const getAllUsers = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
        skip,
        take: limit,
        orderBy: { id: "desc" }
    });

    const total = await prisma.user.count();
    const safeUsers = users.map(user => {
        const { password, ...profile } = user;
        return profile;
    });

    return {
        data: safeUsers,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    };
};

const toggleUserStatus = async (userId: number, targetStatus: boolean) => {
    const user = await prisma.user.update({
        where: { id: userId },
        data: { status: targetStatus }
    });

    const { password, ...safeUser } = user;
    return safeUser;
};

export const adminService = {
    getAllUsers,
    toggleUserStatus
};
