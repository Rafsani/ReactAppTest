const Product = require("../models/product.js")

let count=0;

const getAllProducts = async  (req, res) => {
    try{

        const products = await Product.find();
        res.status(200).json(products);
        console.log(count++);
    }
    catch (e)
    {
        res.status(404).send(e);
    }
}



const addProducts =  ( req,res) => {

    console.log(req.body)
    //const prd = new Product(new_product_body);
    console.log(req.filename);
    try{
        const prd = new Product({
            ProductName: req.body.ProductName,
            Description: req.body.Description,
            ProductPrice: req.body.ProductPrice,
            Image: "./images/" + req.file.originalname,
        });
        prd.save();
        console.log(prd);
        res.status(201);

    }
    catch (e)
    {
        console.log(e)
        res.send(e);
    }

}



module.exports = {
    getAllProducts,
    addProducts,
}