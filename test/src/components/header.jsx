import React, { Component ,useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
const NavItems = [
  {
    title:"Home",
    link:'#',
    icon:"fa fa-home"
  },
  {
    title:"Products",
    link:"/product",
    icon:"fa fa-gift"
  },
  {
    title:"profile",
    link:'#',
    icon:"fa fa-user-circle-o"
  },
  {
    title:"logout",
    link:'#',
    icon:"fa fa-reply"
  }

]
function NavBar () {
  
  const [state, setstate] = useState(false);

  

  
    return (
     
        <nav className="App-header" >
          

          <a className="HeaderLinks" href ="https://www.facebook.com">
            <h6 className= "NavbarLogo" >Logo </h6>
          </a>
          <div className = "App-header" id = {state ? "hidden" : "showing"}>
            <ul>
          {NavItems.map((item,index) => (
            <li  classname="HeaderItems" key={index}  ><i className={item.icon} aria-hidden="true"></i><Link className="HeaderLinks" to={item.link}> {item.title}</Link></li>
          ) ) }

          </ul>
          <i className="fa fa-bars" onClick={() => setstate(!state) } ></i>
          

          </div>
          
        </nav>
     
    );
  }

 
export default NavBar;