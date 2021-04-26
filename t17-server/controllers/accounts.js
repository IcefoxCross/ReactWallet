const accountsQuery = require("../querys/accounts");
let consts = require("../constants/constants");

exports.createAccount = async(req, res, userId, type) => {
    accountsQuery.createAccount(userId, type)
        .then(account => {
            if (account) {
                res.status(consts.REQ_SUCCESS).send({msg: 'Account created successfully'});
            } else {
                res.status(consts.REQ_404);
            }
        }).catch(err => {res.status(consts.REQ_FAILED);});
};