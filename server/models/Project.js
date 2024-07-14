import { pool } from '../db.js';

const Project = {};

Project.getAllProjects = async () => {
  const [rows] = await pool.query('SELECT * FROM projects');
  return rows;
};



export default Project;
