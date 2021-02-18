import React, { Component } from "react";
import NavBar from "./components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Product from "./components/product";
import AddProductForm from "./components/AddProductForm"

import Cards from "./components/Cards";
import "./App.css";
 
class App extends Component {
  state = {
    items: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  render() {
    return (
      <Router>
     
       <Route path="/" exact render = { (props) => (
         <>
        <NavBar/>
        <Cards />
        </>
       ) }
      />
        

      <Route path="/product/" exact render = { (props) => (
        <>
          <Product />
        </>

      ) } />


<Route path="/product/:id" exact render = { (props) => (
        <>
          <Product />
        </>

      ) } />


      <Route path = "/upload" exact render = { (props) => (
        <>
          <NavBar/>
          <AddProductForm />
        </>
      )

      } />

      
        </Router>
    );
  }
}
 
export default App;