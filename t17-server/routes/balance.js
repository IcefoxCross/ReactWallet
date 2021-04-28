const express = require('express');
const router = express.Router();
const { getBalanceByAccount } = require('../controllers/balances');

router.get('/:id', getBalanceByAccount);

module.exports = router;