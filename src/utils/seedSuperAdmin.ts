import { prisma } from "../config/db";
import bcrypt from "bcryptjs";

export async function seedSuperAdmin() {
    const superAdminEmail = process.env.SEED_SUPER_ADMIN_EMAIL;
    const superAdminPassword = process.env.SEED_SUPER_ADMIN_PASSWORD;

    if (!superAdminEmail || !superAdminPassword) {
        throw new Error("Super Admin email/password is not set !!!");
    }

    const existingAdmin = await prisma.user.findUnique({ where: { email: superAdminEmail } });

    if (existingAdmin) {
        console.log("Super Admin Already Exists!");
        return existingAdmin;
    }

    const hashedPassword = await bcrypt.hash(superAdminPassword, 10);

    const newAdmin = await prisma.user.create({
        data: {
            email: superAdminEmail,
            password: hashedPassword,
            role: "SUPER_ADMIN",
            name: "Ayub Khan",
        },
    });

    console.log("Super Admin seeded:", newAdmin.email);
    return newAdmin;
}
