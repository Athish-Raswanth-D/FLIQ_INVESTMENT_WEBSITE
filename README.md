# Fliq - Investment Platform

A comprehensive investment platform that allows users to manage their investment portfolio, buy stocks and mutual funds, and track their investments.

## User Journey Flow

1. **Login/Signup**: Users can create an account or login to an existing account
2. **Profile Creation**: After login, users complete their profile with personal and investment preference information
3. **Investment Selection**: Users can browse and select stocks or mutual funds to invest in
4. **Payment Process**: Users complete a mock payment process for their selected investments
5. **Dashboard View**: Users can view their investment portfolio and profile information

## Setup Instructions

### Database Setup

1. Make sure you have MySQL installed and running
2. Create a database named `fliq`
3. Run the SQL script in `backend/database_setup.sql` to create the necessary tables:
   ```
   mysql -u root -p fliq < backend/database_setup.sql
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   node index.js
   ```
   The server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the Hit_Wealth-main directory:
   ```
   cd "Hit_Wealth-main"
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```
   The application will open in your browser at http://localhost:3001

## Features

- User authentication (signup/login)
- Profile management
- Stock browsing and purchasing
- Mutual fund investment
- Mock payment processing
- Investment portfolio tracking
- Dashboard with investment summary

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Authentication**: bcrypt for password hashing