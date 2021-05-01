const db = require('../models');
const FixedTermDeposit = db.FixedTermDeposit;

queryGetAllFixedTermDepositsByUser = async (id) => {
    const fixedTermDeposits = await FixedTermDeposit.findAll({
        where: {
            userId: id,
        },
    });
    return fixedTermDeposits
};

module.exports = { queryGetAllFixedTermDepositsByUser };