-- Database setup script for Fliq application

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255),
  contact VARCHAR(50),
  profile_picture LONGTEXT,
  portfolio_value DECIMAL(15, 2),
  investment_goal TEXT,
  risk_tolerance ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',
  preferred_investment_type VARCHAR(255),
  annual_income DECIMAL(15, 2),
  financial_advisor VARCHAR(255),
  tax_bracket VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create investments table
CREATE TABLE IF NOT EXISTS investments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  type ENUM('stock', 'mutualfund') NOT NULL,
  symbol VARCHAR(50) NOT NULL,
  name VARCHAR(255),
  quantity INT NOT NULL,
  purchase_price DECIMAL(15, 2) NOT NULL,
  purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Sample data for testing (optional)
-- INSERT INTO users (username, password) VALUES ('test@example.com', '$2b$10$X5Ld3c3zrZGQc3zhb3jkFOp.7nDT2ZO.pjUYMDVVk1MWO8JMxLWji'); -- password: test123