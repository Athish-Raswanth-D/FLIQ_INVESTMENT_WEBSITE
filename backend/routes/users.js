const express = require('express');
const router = express.Router();
const connection = require('../database');

const bcrypt = require('bcrypt');

// User signup route
router.post('/signup', (req, res) => {
  const { username, password, userId } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if user already exists
  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error checking user existence:', err);
      return res.status(500).json({ message: 'Error checking user existence' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password and create user
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ message: 'Error hashing password' });
      }

      connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) {
          console.error('Error creating user:', err);
          return res.status(500).json({ message: 'Error creating user' });
        }
        res.status(201).json({ message: 'User created successfully' });
      });
    });
  });
});

// User login route
router.post('/login', (req, res) => {
  const { username, password, userId } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Find user by username
  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error finding user:', err);
      return res.status(500).json({ message: 'Error finding user' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];

    // Compare passwords
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ message: 'Error comparing passwords' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Authentication successful (you might want to generate a token here)
      res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username } });
    });
  });
});

module.exports = router;