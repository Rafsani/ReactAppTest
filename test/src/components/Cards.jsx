import React from 'react'
//import Items from "./items";
import {Component} from 'react'
import { CardDeck } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
import axios from 'axios'
const Items = [];
  axios.get("http://localhost:5000/api").then ((resp)=>
      {
        const data = resp.data;
        console.log(data);
        data.forEach(element => {
          Items.push(element);
        });
    });
class Cards extends Component {

  constructor(props){
    super(props);
    this.state = { Items: [] };
   
}

  componentDidMount()
  {
    axios.get("http://localhost:5000/api").then ((resp)=>
    {
      this.setState( {Items: resp.data});
  }).catch((error) => {
      console.log(error);
  });
  }




    render(){
    return (
      
        <div>
<CardDeck >
      {Items.map((product,index) => (
        
<Link className="CardLinks" to = "/product/" image={product.Image} > 
<Card key={index} >
    <Card.Img variant="top" src={product.Image} alt="..."/>
    <Card.Body className= 'element'>
     
      <Card.Title>{product.ProductName}</Card.Title>
      <Card.Text>
        {product.Description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Price: {product.ProductPrice}</small>৳
    </Card.Footer>
  </Card>
  </Link>

      ))}



  









</CardDeck>
        </div>
    )
    }
}

export default Cards ;
