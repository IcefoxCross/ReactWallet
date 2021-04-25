const db = require('../models');
const Account = db.Account;

exports.createAccount = (userId, currencyType) => {
    return Account.create({
        currency: 0,
        currencyType,
        userId
    });
};