const express = require('express');
const router = express.Router();
const connection = require('../database');

// Get user profile
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = 'SELECT * FROM profiles WHERE user_id = ?';
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching profile:', err);
      return res.status(500).json({ message: 'Error fetching profile' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(results[0]);
  });
});

// Create or update user profile
router.post('/', (req, res) => {
  const { userId, name, email, contact, profilePicture, portfolioValue, investmentGoal, 
          riskTolerance, preferredInvestmentType, annualIncome, financialAdvisor, taxBracket } = req.body;
  
  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  // Check if profile already exists
  connection.query('SELECT * FROM profiles WHERE user_id = ?', [userId], (err, results) => {
    if (err) {
      console.error('Error checking profile existence:', err);
      return res.status(500).json({ message: 'Error checking profile existence' });
    }

    if (results.length > 0) {
      // Update existing profile
      const updateQuery = `
        UPDATE profiles 
        SET name = ?, email = ?, contact = ?, profile_picture = ?, 
            portfolio_value = ?, investment_goal = ?, risk_tolerance = ?, 
            preferred_investment_type = ?, annual_income = ?, 
            financial_advisor = ?, tax_bracket = ?
        WHERE user_id = ?
      `;
      
      connection.query(updateQuery, [
        name, email, contact, profilePicture, portfolioValue, investmentGoal,
        riskTolerance, preferredInvestmentType, annualIncome, financialAdvisor, taxBracket, userId
      ], (err, results) => {
        if (err) {
          console.error('Error updating profile:', err);
          return res.status(500).json({ message: 'Error updating profile' });
        }
        res.status(200).json({ message: 'Profile updated successfully' });
      });
    } else {
      // Create new profile
      const insertQuery = `
        INSERT INTO profiles (
          user_id, name, email, contact, profile_picture, portfolio_value, 
          investment_goal, risk_tolerance, preferred_investment_type, 
          annual_income, financial_advisor, tax_bracket
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      
      connection.query(insertQuery, [
        userId, name, email, contact, profilePicture, portfolioValue, investmentGoal,
        riskTolerance, preferredInvestmentType, annualIncome, financialAdvisor, taxBracket
      ], (err, results) => {
        if (err) {
          console.error('Error creating profile:', err);
          return res.status(500).json({ message: 'Error creating profile' });
        }
        res.status(201).json({ message: 'Profile created successfully' });
      });
    }
  });
});

module.exports = router;