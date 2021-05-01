const express = require('express');
const router = express.Router();
const { getAllFixedTermDepositsByUser, createFixedTermDeposit } = require('../controllers/fixedTermDeposits');

// Get all fixed terms Deposits by user
router.get('/:id', getAllFixedTermDepositsByUser);
router.post('/', createFixedTermDeposit);


module.exports = router;