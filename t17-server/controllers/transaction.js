const transactionQuery = require("../querys/transaction");
const consts = require("../constants/consts")

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
//Get transaction by type
const getTransactions = (req, res, next) => {
  const typeTransaction = req.params.type;
  const accountId = parseInt(req.params.accountId);
  transactionQuery
      .getTransactions(typeTransaction, accountId)
      .then((result) => {
          res.status(consts.code_success).send(result);
      })
      .catch((err) =>
          res.status(consts.code_failure).send({ message: err.message })
      );
}

module.exports = {
    createTransaction,
    getTransactions,
};