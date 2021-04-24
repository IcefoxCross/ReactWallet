const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const usersController = require('./users');
let consts = require("../constants/constants");

exports.generateAuthToken = (data) => {
    const token = jwt.sign({ data }, process.env.SECRET_TOKEN, {
        expiresIn: 60 * 60 * 24, // 24hs
    });
    return { token };
};

exports.register = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, consts.SALT_ROUNDS);

    return usersController.createUser(req, res, password);
};