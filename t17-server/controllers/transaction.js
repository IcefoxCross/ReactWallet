const transactionQuery = require("../querys/transaction");
const consts = require("../constants/consts")
const accountsQuery = require('../querys/accounts')

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
  queryCreateTransaction(req.body.amount, req.body.concept, req.body.type, req.body.accountId)
    .then((result) => {
      res.status(consts.code_success).send(consts.SUCCESS_TRANSACTION_CREATE);
    })
    .catch((err) =>
      res.status(consts.code_failure).send({ message: err.message })
    );
};
//Get transaction by type
const getTransactionsByType = async (req, res, next) => {
    try {
        const typeTransaction = req.params.type;
        const userId = parseInt(req.params.userId);
        const accountsId = await accountsQuery.getAccountsIdByUser(userId);
        if(accountsId.length !== 0) {
            const result = await transactionQuery.querygetTransactionsByType(
                typeTransaction,
                accountsId
            );
            res.status(consts.code_success).send(result);
        }
        else{
          throw new Error("El usuario no tiene cuentas asociadas");
        }
    } catch (err) {
        res.status(consts.code_failure).send({ message: err.message });
    }
}

module.exports = { getAllTransactionsByAccount, createTransaction, getTransactionsByType };
