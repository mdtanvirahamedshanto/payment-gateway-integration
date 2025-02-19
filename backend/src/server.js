// server.js
const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Port configuration
const PORT = process.env.PORT || 5000;

// Create server
const server = http.createServer(app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
