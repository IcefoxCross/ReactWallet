const express = require('express');
const router = express.Router();
const { getFixedTermDeposits } = require('../controllers/fixedTermDeposits');

router.get('/', getFixedTermDeposits); //Solo para probar

module.exports = router;