const db = require('../models');
const Account = db.Account;

exports.createAccount = (userId, currencyType) => {
    return Account.create({
        currency: 0,
        currencyType,
        userId
    });
};

exports.getAllAccountsByUser = async (id) => {
    const accounts = await Account.findAll({
        where: {
            userId: id,
        },
    });
    return accounts;
};

exports.getAccountsIdByUser = async (id) => {
    let accountsId = await Account.findAll({
        attributes: ['id'],
        where: {
            userId: id,
        },
    });
    accountsId = accountsId.map((element) => element.id);
    return accountsId;
};