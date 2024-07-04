// index.js (or your server entry file)
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 5000;

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',  // MySQL host
  user: 'root',       // MySQL username
  password: 'password',   // MySQL password
  database: 'my_database' // MySQL database name
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Example API route
app.get('/api/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error fetching users: ' + error.stack);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
