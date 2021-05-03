const usersQuery = require("../querys/users");
const accountsController = require("../controllers/accounts");
let consts = require("../constants/constants");

exports.createUser = async (req, res, password) => {
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
        res.status(consts.REQ_SUCCESS).send({ msg: 'User created successfully' });
    }
};

exports.getUserByEmail = (req, res, email) => {
    usersQuery.getUserByEmail(email)
        .then(user => {
            if (user) {
                res.status(consts.REQ_SUCCESS).send(user.dataValue);
            } else {
                res.status(consts.REQ_404).send({ msg: 'User not found' });
            }
        }).catch(err => res.status(consts.REQ_FAILED));
};

exports.getAllUsers = async (req, res) => {
    const users = await usersQuery.getAllUsers();
    if (users) {
        res.status(consts.REQ_SUCCESS).send(users);
    } else {
        res.status(consts.REQ_404)
    }
};