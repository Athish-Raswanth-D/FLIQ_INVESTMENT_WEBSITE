const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const usersRoutes = require('./routes/users');
const investmentsRoutes = require('./routes/investments');
const profileRoutes = require('./routes/profile');

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public directory

// Add CORS middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    return res.status(200).json({});
  }
  next();
});

app.use('/api/users', usersRoutes);
app.use('/api/investments', investmentsRoutes);
app.use('/api/profile', profileRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});