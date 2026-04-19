import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";

async function seedAdmin() {
    try {
        const adminData = {
            name: "Main Admin",
            email: "admin@skillbridge.com",
            role: "ADMIN" as "ADMIN",
            password: "admin123"
        };
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        });

        if (existingUser) {
            console.log("Admin user already exists! Escaping seed.");
            return;
        }

        const hashedPassword = await bcrypt.hash(adminData.password, 10);

        await prisma.user.create({
            data: {
                name: adminData.name,
                email: adminData.email,
                password: hashedPassword,
                role: adminData.role,
                status: true
            }
        });
    } catch (error) {
        console.error("Failed to seed admin:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedAdmin();
