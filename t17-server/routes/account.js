const express = require('express');
const router = express.Router();
const { getAllAccountsByUser } = require('../controllers/accounts');

// Get all fixed terms Deposits by user
router.get('/:id', getAllAccountsByUser);


module.exports = router;