const express = require('express');
const router = express.Router();

const products = require('./products.controller');

/* GET single product details by it's id. */
router.get('/:id', products.findOne);
router.get('/', products.findAll);
router.post('/', products.create);

module.exports = router;