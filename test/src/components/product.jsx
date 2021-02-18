import React from 'react'
import Navbar from './header'
function Product(props) {
    return (
       <div>
            <Navbar />

            <div className="ProductImage" >
                <img src="logo192.png" alt="..."/>
            </div>


            <div className="ProductTitle">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa!</h2>
            </div>

            <div className = "ProductDescription">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, reprehenderit ipsa velit dolorum aliquam molestiae fugit quisquam ullam amet, quos iste voluptate soluta officia perspiciatis? Doloribus officia saepe exercitationem quisquam quia sunt optio dignissimos inventore earum quasi eaque, impedit, rerum quas cum praesentium voluptates quod mollitia minus. Numquam, animi sit.
                </p>
            </div>

            <h1 className= "ProductPrice">
                 1000৳
            </h1>
        </div> 
           
 
       
    )
}

export default Product
