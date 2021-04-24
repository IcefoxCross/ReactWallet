const { validationResult, body } = require('express-validator');
const db = require('../models');
const consts = require("../constants/constants");
const User = db.User;

exports.loginValuesFieldValidator = [
    body("email").exists().isEmail().withMessage("Invalid email or password"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Invalid email or password"),
];

exports.checkEmailPassword = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(consts.REQ_FAILED).json({ errors: validationErrors.array() });
    }
    next();
};

exports.checkDuplicateEmail = (req, res, next) => {
    // Look for User with email in request
    User.findOne({
        where: {email: req.body.email}
    }).then(user => {
        // If user with email exists, cancel validation
        if (user) {
            res.status(consts.REQ_FAILED).send({message: consts.MSG_DUPLICATE_EMAIL});
            return;
        }
        next();
    }).catch(err => console.log(err));
};