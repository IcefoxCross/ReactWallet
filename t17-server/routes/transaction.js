const express = require('express');
const router = express.Router();
const { getTransactionsByType, createTransaction, getAllTransactionsByAccount } = require('../controllers/transaction');

// Get transaction by type
router.get('/:type/userId/:userId', getTransactionsByType);
// Post transacction
router.post('/', createTransaction);
// Get all transactions by account
router.get('/:id', getAllTransactionsByAccount);

module.exports = router;