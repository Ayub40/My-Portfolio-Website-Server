// import { prisma } from "../config/db";

// async function deleteSuperAdmin() {
//     const email = process.env.SEED_SUPER_ADMIN_EMAIL;
//     if (!email) {
//         throw new Error("Super Admin email missing in .env!");
//     }

//     const deletedAdmin = await prisma.user.deleteMany({
//         where: { email: email },
//     });

//     console.log("Deleted Super Admin count:", deletedAdmin.count);
//     await prisma.$disconnect();
// }

// deleteSuperAdmin()
//     .then(() => console.log("Done"))
//     .catch((err) => {
//         console.error("Error:", err);
//         prisma.$disconnect();
//     });
