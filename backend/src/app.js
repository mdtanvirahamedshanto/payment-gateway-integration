const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing application/json

// Routes
// User Route
app.use('/api/v1/users', userRoutes);

// Payments Routes
// SSLCommerz
app.use('/api/v1/payments', require('./routes/paymentRoutes'));

// AamarPay
app.use('/api/v2/payments', require('./routes/aamarpayRoutes'));

// shurjopay
app.use('/api/v3/payments', require('./routes/shurjopayRoutes'));

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
