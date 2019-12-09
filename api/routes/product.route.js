const express = require('express');
const controller = require('./../controllers/product.controller');
const router = express.Router();

// Dùng thử Insomnia để test REST API
router.get('/', controller.getAllProducts)
.get('/:name', controller.findByName)
.post('/', controller.create)
.delete('/:name', controller.deleteByName)
.patch('/:name', controller.updateByName)

module.exports = router;