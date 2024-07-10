// Change this import statement in Project.js
import db from '../config/db.config.js';

// To explicitly import 'pool' from db.config.js
import { pool } from '../config/db.config.js';


const Project = {};

Project.getAllProjects = async () => {
  const [rows] = await db.query('SELECT * FROM projects');
  return rows;
};

// Add more methods as needed: createProject, updateProject, deleteProject, etc.

export default Project;
