import express from 'express';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/projects', projectRoutes);
// Add more routes as needed

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
