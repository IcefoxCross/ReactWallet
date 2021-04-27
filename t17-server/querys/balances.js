const db = require("../models");
const Transaction = db.Transaction;

queryGetAllArsPaymentTransactionsByAccount = async (id) => {
  const paymentTransactions = await Transaction.findAll({
    where: {
      accountId: id,
      currency: 1,
      currencyType: 'ARS',
      type: 'payment',
    },
  });
  return paymentTransactions
};

queryGetAllUsdPaymentTransactionsByAccount = async (id) => {
  const paymentTransactions = await Transaction.findAll({
    where: {
      accountId: id,
      currency: 2,
      currencyType: 'USD',
      type: 'payment',
    },
  });
  return paymentTransactions
};

queryGetAllArsTopUpTransactionsByAccount = async (id) => {
  const topUptransactions = await Transaction.findAll({
    where: {
      accountId: id,
      currency: 1,
      currencyType: 'ARS',
      type: 'topup',
    },
  });
  return topUptransactions
};

queryGetAllUsdTopUpTransactionsByAccount = async (id) => {
  const topUptransactions = await Transaction.findAll({
    where: {
      accountId: id,
      currency: 2,
      currencyType: 'USD',
      type: 'topup',
    },
  });
  return topUptransactions
};

module.exports = {
  queryGetAllArsPaymentTransactionsByAccount, queryGetAllUsdPaymentTransactionsByAccount,
  queryGetAllArsTopUpTransactionsByAccount, queryGetAllUsdTopUpTransactionsByAccount
}