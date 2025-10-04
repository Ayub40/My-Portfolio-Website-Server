import express from "express";
import { ProjectController } from "./project.controller";

const router = express.Router();

router.get("/stats", ProjectController.getProjectStat);

router.get("/", ProjectController.getAllProjects);
router.get("/:id", ProjectController.getProjectById);
router.post("/", ProjectController.createProject);
router.patch("/:id", ProjectController.updateProject);
router.delete("/:id", ProjectController.deleteProject);

export const projectRouter = router;
