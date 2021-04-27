const express = require('express');
const {
  queryGetAllArsPaymentTransactionsByAccount, queryGetAllUsdPaymentTransactionsByAccount,
  queryGetAllArsTopUpTransactionsByAccount, queryGetAllUsdTopUpTransactionsByAccount
} = require("../querys/balances");
const consts = require("../constants/consts");
const { getBalances } = require('../middlewares/getBalance');


const getBalanceByAccount = async (req, res) => {
  const accountId = parseInt(req.params.id);
  const arsTopUpTransactionsByAccount = await queryGetAllArsTopUpTransactionsByAccount(accountId);
  const arsPaymentTransactionsByAccount = await queryGetAllArsPaymentTransactionsByAccount(accountId);
  const usdTopUpTransactionsByAccount = await queryGetAllUsdTopUpTransactionsByAccount(accountId);
  const usdPaymentTransactionsByAccount = await queryGetAllUsdPaymentTransactionsByAccount(accountId);
  const balances = getBalances(arsTopUpTransactionsByAccount, arsPaymentTransactionsByAccount, usdTopUpTransactionsByAccount, usdPaymentTransactionsByAccount)
  if (balances) {
    res.status(consts.code_success).send(balances);
  } else {
    res.status(consts.CODE_FAILURE_404);
  }
};

module.exports = { getBalanceByAccount };