const express = require('express');
const { queryGetAllTransactionsByAccount } = require("../querys/balances");
const consts = require("../constants/consts");
const { getBalances } = require('../middlewares/getBalance');
const { getAllAccountsByUser } = require('../querys/accounts');


const getBalanceByAccount = async (req, res) => {
  const userId = parseInt(req.params.id);
  const accountsByUserId = await getAllAccountsByUser(userId);
  const arsAccountId = accountsByUserId[0].id;
  const usdAccountId = accountsByUserId[1].id;
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
};

module.exports = { getBalanceByAccount };