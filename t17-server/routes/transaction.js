const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction } = require('../controllers/transaction');

router.get('/', getTransactions);
router.post('/', createTransaction);

module.exports = router;