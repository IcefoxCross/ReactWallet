const usersQuery = require("../querys/users");
let consts = require("../constants/constants");

exports.createUser = (req, res, password) => {
    const { body } = req;
    usersQuery.createUser(body.firstName, body.lastName, body.email, password)
        .then(user => {
            if (user) {
                res.status(consts.REQ_SUCCESS).send({msg: 'User created successfully'});
            } else {
                res.status(consts.REQ_404);
            }
        }).catch(err => {res.status(consts.REQ_FAILED);});
};