import React from 'react'
import Navbar from './header'
import {useState} from 'react'
import axios from 'axios'







function Product(props) {
    
const [productName, setproductName] = useState('');
const [productPrice, setproductPrice] = useState('');
const [productDescription, setproductDescription] = useState('');
const [productImage, setproductImage] = useState('')


axios.get('http://localhost:5000/api/product/'+props.match.params.id).then(Response => {
     setproductName(Response.data.ProductName);
     setproductDescription(Response.data.Description);
     setproductPrice(Response.data.ProductPrice);
     setproductImage(Response.data.Image)
     console.log(Response.data);
 }).catch( (err) =>{
    console.log(err);
 } );



 
    return (
       <div>
            <Navbar />
          
            <div className="ProductImage" >
                <img src={`/images/${productImage}`} alt="..."/>
            </div>


            <div className="ProductTitle">
                <h2>{productName}</h2>
            </div>

            <div className = "ProductDescription">
                <p>
                    {productDescription}
                </p>
            </div>

            <h1 className= "ProductPrice">
                 {productPrice}৳
            </h1>
        </div> 
           
 
       
    )
}

export default Product
