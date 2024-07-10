import express from 'express';
const router = express.Router();
import projectController from "../controllers/projectController.js"

router.get('/', projectController.getAllProjects);


export default router;
