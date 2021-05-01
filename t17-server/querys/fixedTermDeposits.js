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

queryCreateFixedTermDeposit = async (amount, closingData, userId) => {
    try {
        const newFixedTermDeposit = await FixedTermDeposit.create({ amount, closingData, userId });
        return newFixedTermDeposit;
    } catch (err) {
        return err;
    }
};

module.exports = { queryGetAllFixedTermDepositsByUser, queryCreateFixedTermDeposit };