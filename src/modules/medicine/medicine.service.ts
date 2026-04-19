import { prisma } from "../../lib/prisma.js";

const getAllMedicines = async (filters: any) => {
    return await prisma.medicine.findMany({
        include: { category: true }
    });
};

const getMedicineById = async (id: number) => {
    return await prisma.medicine.findUniqueOrThrow({
        where: { id },
        include: { category: true, reviews: true, seller: { select: { name: true } } }
    });
};

export const medicineService = {
    getAllMedicines,
    getMedicineById
};
