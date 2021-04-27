const consts = require("../constants/constants");
const { queryGetBalanceByAccount } = require("../querys/fixedTermDeposits");

const getBalanceByAccount = async (req, res, next) => {
  const accountId = parseInt(req.params.id);
  //TODO: Validar que el usuario existe, previo a que haga la búsqueda
  const balanceByAccount = await queryGetBalanceByAccount(accountId);
  console.log(balanceByAccount)
  if (balanceByAccount) {
    res.status(consts.REQ_SUCCESS).send(balanceByAccount);
  } else {
    res.status(consts.REQ_404);
  }
};

module.exports = { getBalanceByAccount };