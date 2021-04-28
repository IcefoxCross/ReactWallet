const db = require("../models");
const Transaction = db.Transaction;

queryGetAllArsTopUpTransactionsByAccount = async (id) => {
  const topUptransactions = await Transaction.findAll({
    where: {
      accountId: id,
      type: 'topup',
    },
  });
  return topUptransactions
};

queryGetAllArsPaymentTransactionsByAccount = async (id) => {
  const paymentTransactions = await Transaction.findAll({
    where: {
      accountId: id,
      type: 'payment',
    },
  });
  return paymentTransactions
};

queryGetAllUsdTopUpTransactionsByAccount = async (id) => {
  const topUptransactions = await Transaction.findAll({
    where: {
      accountId: id,
      type: 'topup',
    },
  });
  return topUptransactions
};

queryGetAllUsdPaymentTransactionsByAccount = async (id) => {
  const paymentTransactions = await Transaction.findAll({
    where: {
      accountId: id,
      type: 'payment',
    },
  });
  return paymentTransactions
};

module.exports = {
  queryGetAllArsPaymentTransactionsByAccount, queryGetAllUsdPaymentTransactionsByAccount,
  queryGetAllArsTopUpTransactionsByAccount, queryGetAllUsdTopUpTransactionsByAccount
}