const db = require('../models');
const Balance = db.Balance;

queryGetBalanceByAccount = async (id) => {
  const balances = await Balance.findAll({
    where: {
      accountId: id,
    },
  });
  return fixedTermDeposits
};

module.exports = { queryGetBalanceByAccount };