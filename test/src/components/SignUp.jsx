import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import loginForm from '../App.css';
import { Container , Row , Col, Form  } from "react-bootstrap";
import { Fragment } from 'react';
import NavBar from "./header";
import axios from 'axios';
import {useState} from "react";





 function handleSubmit(event){
    event.preventDefault();
    console.log(event.target.form.Name.value);

    const formData = new FormData();
    formData.append('FullName', event.target.form.Name.value );
    formData.append('Email', event.target.form.Email.value );
    formData.append('Password', event.target.form.Password.value );
    formData.append('Address', event.target.form.Address.value );

    console.log(formData);
}


function SignUp() {
   


    return (
        <Fragment>
            <NavBar />

            <Container className="col-5">
                <Col md>
                <Form encType= "multipart/form-data">
               
                <div className="form-outline mb-2"> 
                <h3 color="blue">Sign Up</h3>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Enter Full Name" id="Name"/>
                </div>

              

               
                <Row>
                    <Col md>
                    <div className="form-group"> 
                    <input type="email" className="form-control" placeholder="Enter Email" Id="Email"/>
                </div>
                    
                    </Col>
                   <Col md>
                   <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" Id="Password" />
                </div>
                   </Col>

                </Row>

                <Row>
                <Col>
                <div className="form-group">
                    <input type="textarea" className="form-control" placeholder="Address" Id="Address" />
                </div>
                </Col>
                
                </Row>
                
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
                </Form>
                </Col >
            </Container>
        </Fragment>
    )
}

export default SignUp
