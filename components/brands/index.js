const express = require('express');
const router = express.Router();

const brands = require('./brands.controller');

/* GET single brand details by it's id. */
router.get('/:id', brands.findOne);
router.post('/', brands.create);


module.exports = router;