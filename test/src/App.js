import React, { Component } from "react";
import NavBar from "./components/header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Product from "./components/product";
import AddProductForm from "./components/AddProductForm"
import Login from "./components/login";
import Cards from "./components/Cards";
import SignUp from "./components/SignUp";
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
        

  

      <Route name="product" path='/product/:id' component={Product} />
      <Route name="login" path='/login' component={Login} />
      <Route name="login" path='/signup' component={SignUp} />


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