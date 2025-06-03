const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

router.route('/').get(getProducts); // Defines a GET request to '/' (which will be /api/products)

module.exports = router;