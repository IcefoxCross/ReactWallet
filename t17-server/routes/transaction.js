const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction, getAllTransactionsByAccount } = require('../controllers/transaction');

router.get('/:type/account/:accountId', getTransactions);
router.post('/', createTransaction);
// Get all transactions by account
router.get('/:id', getAllTransactionsByAccount);

module.exports = router;