import pool from '../db.js';

const User = {};User.create = async (username, password) => {
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const [result] = await pool.query(query, [username, password]);
    return result;
  };
  

User.findByUsername = async (username) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};

// Add more methods as needed: createUser, updateUser, deleteUser, etc.

export default User;
