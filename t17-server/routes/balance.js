const express = require('express');
const router = express.Router();
const { getBalanceByAccount } = require('../controllers/balances');

// Get all fixed terms Deposits by user
router.get('/:id', getBalanceByAccount);


module.exports = router;