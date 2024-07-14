import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { pool } from './db.js'; 
import project from './routes/project.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/projects', project);

// Database connection check
const checkConnection = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }

    connection.query('SELECT 1', (error, results) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error('Error executing query:', error);
      } else {
        console.log('Database connected successfully!');
      }
    });
  });
};

checkConnection();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
