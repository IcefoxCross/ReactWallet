const express = require('express');
const router = express.Router();

const getTransactions = (req, res, next) => {
    res.status(200).send({ success: true });
};


module.exports = { getTransactions };