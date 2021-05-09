const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('', controller.default);

module.exports = router;