const express = require('express');
const router = express.Router();
const transactionQuery = require("../querys/transaction");
const consts = require("../constants/consts")

const getTransactions = (req, res, next) => {
  res.status(200).send({ success: true });
};

const createTransaction = (req, res, next) => {
  transactionQuery
    .createTransaction(req.body.amount, req.body.concept, req.body.type, req.body.accountId)
    .then((result) => {
      res.status(consts.code_success).send(consts.SUCCESS_TRANSACTION_CREATE);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};

module.exports = { getTransactions, createTransaction };