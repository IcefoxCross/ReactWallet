const consts = require("../constants/constants");
const { queryGetAllFixedTermDepositsByUser, queryCreateFixedTermDeposit } = require("../querys/fixedTermDeposits");
const { queryCreateTransaction } = require("../querys/transaction");

const getAllFixedTermDepositsByUser = async (req, res, next) => {
    const userId = parseInt(req.params.id);
    //TODO: Validar que el usuario existe, previo a que haga la búsqueda
    const fixedTermDepositsByUser = await queryGetAllFixedTermDepositsByUser(userId);
    console.log(fixedTermDepositsByUser)
    if (fixedTermDepositsByUser) {
        res.status(consts.REQ_SUCCESS).send(fixedTermDepositsByUser);
    } else {
        res.status(consts.REQ_404);
    }
};

const createFixedTermDeposit = (req, res, next) => {
    queryCreateFixedTermDeposit(req.body.amount, req.body.currencyType, req.body.closingDate, req.body.userId)
    queryCreateTransaction(req.body.amount, req.body.concept, req.body.type, req.body.accountId)
        .then((result) => {
            res.status(consts.REQ_SUCCESS).send(consts.SUCCESS_FTD_CREATE);
        })
        .catch((err) =>
            res.status(consts.REQ_404).send({ message: err.message })
        );
};

module.exports = { getAllFixedTermDepositsByUser, createFixedTermDeposit };