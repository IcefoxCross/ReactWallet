const express = require('express');
const router = express.Router();
const { getTransactionsByType, createTransaction, getAllTransactionsByAccount } = require('../controllers/transaction');

router.get('/:type/userId/:userId', getTransactionsByType);
router.post('/', createTransaction);
// Get all transactions by account
router.get('/:id', getAllTransactionsByAccount);

module.exports = router;