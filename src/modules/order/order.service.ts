import { prisma } from "../../lib/prisma.js";

const createOrder = async (customerId: number, payload: { items: { medicineId: number, quantity: number, price: number }[], totalPrice: number }) => {
    const result = await prisma.$transaction(async (tx) => {
        const order = await tx.order.create({
            data: {
                customerId,
                totalPrice: payload.totalPrice,
                status: "PLACED",
                items: {
                    create: payload.items.map(item => ({
                        medicineId: item.medicineId,
                        quantity: item.quantity,
                        price: item.price
                    }))
                }
            },
            include: {
                items: true
            }
        });

        return order;
    });

    return result;
};

const getCustomerOrders = async (customerId: number) => {
    return await prisma.order.findMany({
        where: { customerId },
        orderBy: { createdAt: "desc" },
        include: {
            items: {
                include: {
                    medicine: {
                        select: { name: true, price: true }
                    }
                }
            }
        }
    });
};

const getOrderById = async (customerId: number, orderId: number) => {
    return await prisma.order.findFirstOrThrow({
        where: { 
            id: orderId,
            customerId: customerId 
        },
        include: {
            items: {
                include: {
                    medicine: true
                }
            }
        }
    });
};

export const orderService = {
    createOrder,
    getCustomerOrders,
    getOrderById
};
