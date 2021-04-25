const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const usersController = require('./users');
const usersQuery = require("../querys/users");
let consts = require("../constants/constants");

const generateAuthToken = (data) => {
    const token = jwt.sign({ data }, process.env.SECRET_TOKEN, {
        expiresIn: 60 * 60 * 24, // 24hs
    });
    return { token };
};

exports.register = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, consts.SALT_ROUNDS);

    return usersController.createUser(req, res, password);
};

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersQuery.getUserByEmail(email);
        if (user) {
            // Check if email is valid
            if (email === user.dataValues.email) {
                // Validate password
                const validPassword = await bcrypt.compare(password, user.dataValues.password);
                if (validPassword) {
                    const token = generateAuthToken(user.dataValues).token;
                    res.status(consts.REQ_SUCCESS).send({msg: 'User logged in successfully', token});
                } else {
                    res.status(consts.REQ_FAILED).send({msg: 'Password not valid'});
                }
            }
        } else {
            res.status(consts.REQ_404).send({msg: 'User not found'});
        }
    } catch (e) {
        res.status(consts.REQ_FAILED);
    }
};