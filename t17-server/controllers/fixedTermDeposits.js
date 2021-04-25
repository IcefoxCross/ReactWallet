const express = require('express');
const router = express.Router();

const getFixedTermDeposits = (req, res, next) => {
    res.status(200).send({ success: true });
};

module.exports = { getFixedTermDeposits };