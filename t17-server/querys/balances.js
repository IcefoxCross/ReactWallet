const db = require("../models");
const Transaction = db.Transaction;

queryGetAllTransactionsByAccount = async (id, transactionType) => {
  const topUptransactions = await Transaction.findAll({
    where: {
      accountId: id,
      type: transactionType,
    },
  });
  return topUptransactions
};

module.exports = { queryGetAllTransactionsByAccount }