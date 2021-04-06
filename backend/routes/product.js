
const productController = require("../controller/productController");
const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,"../test/public/images/");
    },
    filename: (req,file,callback) => {
        callback(null,file.originalname);
    }
})

const upload = multer({storage:storage});

router.get('/' , productController.getAllProducts);

router.get('/product/:id', productController.getProduct);

router.post('/upload',upload.single('ProductImage'),  productController.addProducts )

module.exports  = router ;