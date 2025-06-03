const Product = require('../models/Product');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
    try {
        // For now, let's fetch all products without filters or pagination
        // We will add filter/sort/pagination logic in a later step
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};