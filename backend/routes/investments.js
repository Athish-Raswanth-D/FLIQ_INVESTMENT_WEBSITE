const express = require('express');
const router = express.Router();
const connection = require('../database');

// Get user investments
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = 'SELECT * FROM investments WHERE user_id = ?';
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching investments:', err);
      return res.status(500).json({ message: 'Error fetching investments' });
    }
    res.status(200).json(results);
  });
});

// Add a new investment for a user
router.post('/', (req, res) => {
  const { userId, type, symbol, name, quantity, purchase_price } = req.body;
  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  // Validate required fields
  if (!type || !symbol || !name || quantity === undefined || purchase_price === undefined) {
    return res.status(400).json({ message: 'All investment details are required' });
  }
  
  // Ensure proper data types for numeric fields
  const parsedQuantity = parseInt(quantity);
  const parsedPrice = parseFloat(purchase_price);
  
  if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
    return res.status(400).json({ message: 'Quantity must be a positive number' });
  }
  
  if (isNaN(parsedPrice) || parsedPrice <= 0) {
    return res.status(400).json({ message: 'Purchase price must be a positive number' });
  }
  const query = 'INSERT INTO investments (user_id, type, symbol, name, quantity, purchase_price) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [userId, type, symbol, name, parsedQuantity, parsedPrice], (err, results) => {
    if (err) {
      console.error('Error adding investment:', err);
      // Provide more specific error information
      if (err.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(400).json({ message: 'Invalid user ID. User does not exist.' });
      } else if (err.code === 'ER_BAD_FIELD_ERROR') {
        return res.status(500).json({ message: 'Database schema error. Please contact support.' });
      } else if (err.code === 'ER_DATA_TOO_LONG') {
        return res.status(400).json({ message: 'Input data too long for one or more fields.' });
      } else {
        return res.status(500).json({ message: 'Error adding investment', error: err.message });
      }
    }
    res.status(201).json({ message: 'Investment added successfully' });
  });


});

module.exports = router;