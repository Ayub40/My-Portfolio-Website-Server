import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteAllProjects() {
    await prisma.project.deleteMany({});
    console.log("All projects deleted successfully!");
}

deleteAllProjects()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
