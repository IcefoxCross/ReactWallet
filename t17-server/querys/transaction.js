const db = require("../models");
const Transaction = db.Transaction;

const createTransaction = async (amount, concept,) => {
  try {
    const newTransaction = await Transaction.create({ amount, concept });
    return newTransaction;
  } catch (err) {
    return err;
  }
};

module.exports = { createTransaction }