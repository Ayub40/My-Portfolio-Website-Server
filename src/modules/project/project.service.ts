import { Project, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createProject = async (payload: Prisma.ProjectCreateInput): Promise<Project> => {
    return await prisma.project.create({
        data: payload,
        include: {
            owner: {
                select: { id: true, name: true, email: true }
            }
        }
    });
};

const getAllProjects = async ({
    page = 1,
    limit = 10,
    search,
    technologies
}: {
    page?: number,
    limit?: number,
    search?: string,
    technologies?: string[]
}) => {
    const skip = (page - 1) * limit;

    const where: any = {
        AND: [
            search && {
                OR: [
                    { title: { contains: search, mode: "insensitive" } },
                    { description: { contains: search, mode: "insensitive" } }
                ]
            },
            (technologies && technologies.length > 0) && { technologies: { hasSome: technologies } }
        ].filter(Boolean)
    };

    const result = await prisma.project.findMany({
        skip,
        take: limit,
        where,
        include: { owner: true },
        orderBy: { createdAt: "desc" }
    });

    const total = await prisma.project.count({ where });

    return {
        data: result,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    };
};

const getProjectById = async (id: number) => {
    return await prisma.project.findUnique({
        where: { id },
        include: { owner: true }
    });
};

const updateProject = async (id: number, data: Partial<Project>) => {
    return await prisma.project.update({ where: { id }, data });
};

const deleteProject = async (id: number) => {
    return await prisma.project.delete({ where: { id } });
};

const getProjectStat = async () => {
    return await prisma.$transaction(async (tx) => {
        const totalProjects = await tx.project.count();
        const recentProjects = await tx.project.findMany({
            orderBy: { createdAt: "desc" },
            take: 5
        });

        const lastMonth = new Date();
        lastMonth.setMonth(lastMonth.getMonth() - 1);

        const lastMonthCount = await tx.project.count({
            where: { createdAt: { gte: lastMonth } }
        });

        return {
            stats: {
                totalProjects,
                lastMonthCount
            },
            recentProjects
        };
    });
};

export const ProjectService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getProjectStat
};
