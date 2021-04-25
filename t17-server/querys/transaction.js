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

module.exports = { createTransaction }