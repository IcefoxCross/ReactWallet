const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const authValidator = require('../middlewares/authValidator');
let consts = require("../constants/constants");

/* POST /register : Create new User with 2 Accounts */
router.post(
    consts.URL_REGISTER,
    authValidator.loginValuesFieldValidator,
    authValidator.checkEmailPassword,
    authValidator.checkDuplicateEmail,
    authController.register
);

/* POST /login : Validate email & password to let User log in */
router.post(
    consts.URL_LOGIN,
    authValidator.loginValuesFieldValidator,
    authValidator.checkEmailPassword,
    authController.login
);

module.exports = router;