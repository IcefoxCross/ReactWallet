const db = require('../models');
const User = db.User;

exports.createUser = (firstName, lastName, email, password) => {
    return User.create({
        firstName,
        lastName,
        email,
        password
    });
};

exports.getUserByEmail = (email) => {
    return User.findOne({
        where: {email}
    });
};