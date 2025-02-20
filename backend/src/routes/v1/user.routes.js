// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../../controllers/userController');

// GET /api/users - Get all users
router.get('/', getAllUsers);

// POST /api/users - Create a new user
router.post('/', createUser);

module.exports = router;
