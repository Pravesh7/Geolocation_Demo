const express = require('express');
const router = express.Router();

const locationController = require('../controller/controller');

router.get('/', locationController.getLocation)
router.post('/', locationController.saveLocation)

module.exports = router;