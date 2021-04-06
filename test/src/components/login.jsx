import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import loginForm from '../App.css';
import { Container , Row , Col  } from "react-bootstrap";
import { Fragment } from 'react';
import NavBar from "./header";

function Login() {
    return (
        <Fragment>
            <NavBar />
            
            <Container align="center" className = "loginForm">
                <Col className = "justify-content-md-center" xs lg="4" >
             <form  >
                 <div className="form-outline mb-2"> 
                <h3>Sign In</h3>

                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
             
                    <input type="password" className="form-control" placeholder="Password" id = "pass"/>
                    
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form>
            </Col>
            </Container>
        </Fragment>
    )
}

export default Login
