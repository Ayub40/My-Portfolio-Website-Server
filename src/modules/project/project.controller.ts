import { Request, Response } from "express";
import { ProjectService } from "./project.service";

const createProject = async (req: Request, res: Response) => {
    try {
        const result = await ProjectService.createProject(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to create project", details: error });
    }
};

const getAllProjects = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = (req.query.search as string) || "";
        const technologies = req.query.technologies ? (req.query.technologies as string).split(",") : [];

        const result = await ProjectService.getAllProjects({ page, limit, search, technologies });
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch projects", details: err });
    }
};

const getProjectById = async (req: Request, res: Response) => {
    try {
        const project = await ProjectService.getProjectById(Number(req.params.id));
        if (!project) return res.status(404).json({ error: "Project not found" });
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch project", details: err });
    }
};

const updateProject = async (req: Request, res: Response) => {
    try {
        const project = await ProjectService.updateProject(Number(req.params.id), req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: "Failed to update project", details: err });
    }
};

const deleteProject = async (req: Request, res: Response) => {
    try {
        await ProjectService.deleteProject(Number(req.params.id));
        res.json({ message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete project", details: err });
    }
};

const getProjectStat = async (req: Request, res: Response) => {
    try {
        const result = await ProjectService.getProjectStat();
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch stats", details: err });
    }
};

export const ProjectController = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getProjectStat,
};
