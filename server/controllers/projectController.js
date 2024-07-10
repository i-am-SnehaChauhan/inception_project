import Project from "../models/Project.js"

const projectController = {};

projectController.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAllProjects();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Add more controller methods for CRUD operations

export default projectController;
