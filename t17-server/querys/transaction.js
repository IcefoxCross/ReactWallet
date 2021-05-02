const db = require("../models");
const Transaction = db.Transaction;
const User = db.User;
const Account = db.Account;


queryGetAllTransactionsByAccount = async (userId) => {
  const transactions = await Transaction.findAll({
    required: true,
      include: [
        {
          model: Account,
          as: "account",
          attributes: ["currencyType"],
          required: true,
          include: [
            {
              model: User,
              as: "user",
              where: { id: userId },
              attributes: [],
              required: true,
            },
          ],
        },
      ],
      order: [["createdAt", "DESC"]],
  });
  return transactions;
};

queryCreateTransaction = async (amount, concept, type, accountId) => {
  try {
    const newTransaction = await Transaction.create({amount, concept, type, accountId });
    return newTransaction;
  } catch (err) {
    return err;
  }
};
//Get transaction by type
const querygetTransactionsByType = async (typeTransaction, userId) => {
  try {
      const transactions = await Transaction.findAll({
          where: { type: typeTransaction },
          required: true,
          include: [
              {
                  model: Account,
                  as: "account",
                  attributes: ["currencyType"],
                  required: true,
                  include: [
                      {
                          model: User,
                          as: "user",
                          where: { id: userId },
                          attributes: [],
                          required: true,
                      },
                  ],
              },
          ],
          order: [["createdAt", "DESC"]],
      });
      return transactions;
  } catch (err) {
      return err;
  }
};

module.exports = { queryGetAllTransactionsByAccount, queryCreateTransaction, querygetTransactionsByType }
