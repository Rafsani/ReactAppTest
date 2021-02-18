const mongoose = require('mongoose');
const productSchema = mongoose.Schema (
    {
        ProductName: String,
        Image: String,
        Description: String,
        ProductPrice: String,
    });
const Product = mongoose.model('Product',productSchema);
module.exports = Product;