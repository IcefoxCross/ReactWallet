const express = require('express');
const { queryGetAllTransactionsByAccount } = require("../querys/balances");
const consts = require("../constants/consts");
const { getBalances } = require('../middlewares/getBalance');


const getBalanceByAccount = async (req, res) => {
  const accountId = parseInt((Number(req.params.id) * 2) - 1);
  const usdAccountId = parseInt(Number(req.params.id) * 2);
  const arsTopUpTransactionsByAccount = await queryGetAllTransactionsByAccount(accountId, 'topup');
  const arsPaymentTransactionsByAccount = await queryGetAllTransactionsByAccount(accountId, 'payment');
  const usdTopUpTransactionsByAccount = await queryGetAllTransactionsByAccount(usdAccountId, 'topup');
  const usdPaymentTransactionsByAccount = await queryGetAllTransactionsByAccount(usdAccountId, 'payment');
  const balances = getBalances(arsTopUpTransactionsByAccount, arsPaymentTransactionsByAccount, usdTopUpTransactionsByAccount, usdPaymentTransactionsByAccount)
  if (balances) {
    console.log(usdAccountId)
    res.status(consts.code_success).send(balances);
  } else {
    res.status(consts.CODE_FAILURE_404);
  }
};

module.exports = { getBalanceByAccount };