const express = require('express');
const router = express.Router();
const { getAllFixedTermDepositsByUser } = require('../controllers/fixedTermDeposits');

// Get all fixed terms by user
router.get('/:id', getAllFixedTermDepositsByUser);


module.exports = router;