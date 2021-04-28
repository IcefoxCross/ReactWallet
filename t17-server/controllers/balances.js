const express = require('express');
const {
  queryGetAllArsPaymentTransactionsByAccount, queryGetAllUsdPaymentTransactionsByAccount,
  queryGetAllArsTopUpTransactionsByAccount, queryGetAllUsdTopUpTransactionsByAccount
} = require("../querys/balances");
const consts = require("../constants/consts");
const { getBalances } = require('../middlewares/getBalance');


const getBalanceByAccount = async (req, res) => {
  const accountId = parseInt((Number(req.params.id) * 2) - 1);
  const usdAccountId = parseInt(Number(req.params.id) * 2);
  const arsTopUpTransactionsByAccount = await queryGetAllArsTopUpTransactionsByAccount(accountId);
  const arsPaymentTransactionsByAccount = await queryGetAllArsPaymentTransactionsByAccount(accountId);
  const usdTopUpTransactionsByAccount = await queryGetAllUsdTopUpTransactionsByAccount(usdAccountId);
  const usdPaymentTransactionsByAccount = await queryGetAllUsdPaymentTransactionsByAccount(usdAccountId);
  const balances = getBalances(arsTopUpTransactionsByAccount, arsPaymentTransactionsByAccount, usdTopUpTransactionsByAccount, usdPaymentTransactionsByAccount)
  if (balances) {
    console.log(usdAccountId)
    res.status(consts.code_success).send(balances);
  } else {
    res.status(consts.CODE_FAILURE_404);
  }
};

module.exports = { getBalanceByAccount };