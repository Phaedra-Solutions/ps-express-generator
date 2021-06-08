const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Add all routes here
router.get('', controller.getAll);
router.get('/:id', controller.getById);
router.post('', controller.add);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.delete);


module.exports = router;