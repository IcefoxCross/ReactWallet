const usersQuery = require("../querys/users");
const accountsController = require("../controllers/accounts");
let consts = require("../constants/constants");

exports.createUser = async(req, res, password) => {
    try {
        const { body } = req;
        const user = await usersQuery.createUser(body.firstName, body.lastName, body.email, password);
        if (user) {
            const acc1 = await accountsController.createAccount(req, res, user.id, consts.CURR_ARG);
            const acc2 = await accountsController.createAccount(req, res, user.id, consts.CURR_USA);
        } else {
            res.status(consts.REQ_404);
        }
    } catch (e) {
        res.status(consts.REQ_FAILED);
    } finally {
        res.status(consts.REQ_SUCCESS).send({msg: 'User created successfully'});
    }
};