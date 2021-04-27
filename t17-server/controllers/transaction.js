const express = require('express');
const router = express.Router();
const { queryGetAllTransactionsByAccount, queryCreateTransaction } = require("../querys/transaction");
const consts = require("../constants/consts")

const getTransactions = (req, res, next) => {
  res.status(200).send({ success: true });
};

const getAllTransactionsByAccount = async (req, res, next) => {
  const accountId = parseInt(req.params.id);
  const transactionsByAccount = await queryGetAllTransactionsByAccount(accountId);
  if (transactionsByAccount) {
    res.status(consts.code_success).send(transactionsByAccount);
  } else {
    res.status(consts.CODE_FAILURE_404);
  }
};

const createTransaction = (req, res, next) => {
  queryCreateTransaction(req.body.currency, req.body.currencyType, req.body.amount, req.body.concept, req.body.type, req.body.accountId)
    .then((result) => {
      res.status(consts.code_success).send(consts.SUCCESS_TRANSACTION_CREATE);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

module.exports = { getTransactions, getAllTransactionsByAccount, createTransaction };