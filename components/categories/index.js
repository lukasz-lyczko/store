const express = require('express');
const router = express.Router();

const categories = require('./categories.controller');

/* GET single category details by it's id. */
router.get('/:id', categories.findOne);
// router.get('/', categories.findAll);
router.post('/', categories.create);
// router.put('/:id', categories.update);
// router.delete('/:id', categories.remove);

module.exports = router;