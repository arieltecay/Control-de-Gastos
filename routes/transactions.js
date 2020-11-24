const express = require('express')
const router = express.Router();
const {getTransactions} = require('../controllers/transactions')

router.get('/', (req,res) => res.send('Hola Ariel Tecay'))

module.exports = router;