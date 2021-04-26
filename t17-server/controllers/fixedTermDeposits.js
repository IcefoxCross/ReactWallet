const consts = require("../constants/constants");
const { queryGetAllFixedTermDepositsByUser } = require("../querys/fixedTermDeposits");

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

module.exports = { getAllFixedTermDepositsByUser };