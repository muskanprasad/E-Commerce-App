const Product = require('../models/Product');
exports.getProducts = async (req, res) => {
    try {
        
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};