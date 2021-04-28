const db = require("../models");
const Transaction = db.Transaction;

const createTransaction = async (amount, concept, type, accountId) => {
  try {
    const newTransaction = await Transaction.create({ amount, concept, type, accountId });
    return newTransaction;
  } catch (err) {
    return err;
  }
};
//Get transaction by type
const getTransactions = async (typeTransaction, accountId) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        accountId: accountId,
        type: typeTransaction,
      },
    });
    return transactions;
  } catch (err) {
    return err;
  }
};

module.exports = { createTransaction, getTransactions };