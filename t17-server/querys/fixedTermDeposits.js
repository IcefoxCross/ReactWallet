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

queryCreateFixedTermDeposit = async (amount, currencyType, closingData, userId) => {
    try {
        const newFixedTermDeposit = await FixedTermDeposit.create({ amount, currencyType, closingData, userId });
        return newFixedTermDeposit;
    } catch (err) {
        return err;
    }
};

module.exports = { queryGetAllFixedTermDepositsByUser, queryCreateFixedTermDeposit };