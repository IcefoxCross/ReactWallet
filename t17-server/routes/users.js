const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/users');

// Get all fixed terms Deposits by user
router.get('/', getAllUsers);


module.exports = router;