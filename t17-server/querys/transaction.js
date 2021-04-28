const db = require("../models");
const Transaction = db.Transaction;

queryGetAllTransactionsByAccount = async (id) => {
  const transactions = await Transaction.findAll({
    where: {
      accountId: id,
    },
  });
  return transactions
};

queryCreateTransaction = async (currency, currencyType, amount, concept, type, accountId) => {
  try {
    const newTransaction = await Transaction.create({ currency, currencyType, amount, concept, type, accountId });
    return newTransaction;
  } catch (err) {
    return err;
  }
};

module.exports = { queryGetAllTransactionsByAccount, queryCreateTransaction }