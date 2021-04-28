const express = require('express');
const { queryGetAllTransactionsByAccount } = require("../querys/balances");
const consts = require("../constants/consts");
const { getBalances } = require('../middlewares/getBalance');
const { getAllAccountsByUser } = require('../querys/accounts');


const getBalanceByAccount = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const accountsByUserId = await getAllAccountsByUser(userId);
    const arsAccountId = accountsByUserId.length ? accountsByUserId.filter(acc => acc.currencyType === 'ARS')[0].id : 0;
    const usdAccountId = accountsByUserId.length ? accountsByUserId.filter(acc => acc.currencyType === 'USD')[0].id : 0;
    const arsTopUpTransactionsByAccount = await queryGetAllTransactionsByAccount(arsAccountId, 'topup');
    const arsPaymentTransactionsByAccount = await queryGetAllTransactionsByAccount(arsAccountId, 'payment');
    const usdTopUpTransactionsByAccount = await queryGetAllTransactionsByAccount(usdAccountId, 'topup');
    const usdPaymentTransactionsByAccount = await queryGetAllTransactionsByAccount(usdAccountId, 'payment');
    const balances = getBalances(arsTopUpTransactionsByAccount, arsPaymentTransactionsByAccount, usdTopUpTransactionsByAccount, usdPaymentTransactionsByAccount)
    if (balances) {
      res.status(consts.code_success).send(balances);
    } else {
      res.status(consts.CODE_FAILURE_404);
    }
  } catch (e) {
    res.status(consts.CODE_FAILURE_404).send(e);
  }
};

module.exports = { getBalanceByAccount };