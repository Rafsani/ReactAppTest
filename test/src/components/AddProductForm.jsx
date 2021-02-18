import React from 'react'
import {Form, FormGroup, Button, TextArea, } from 'react-bootstrap'
import axios from "axios";


class AddProductForm extends React.Component {
    
   

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            product_name: '',
            price:'',
            description: '',
        };
        this.HandleFormSubmit = this.HandleFormSubmit.bind(this);
        this.HandleChange = this.HandleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
   

    HandleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    }


    handleFileChange(event){
        this.setState({file: event.target.files[0]});
    }
   

    HandleFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('ProductName', this.state.product_name );
        formData.append('Description' , this.state.description);
        formData.append('ProductPrice',this.state.price);
        formData.append('ProductImage' , this.state.file);
        // const Data = {
        //     'ProductName': this.state.product_name,
        //     'Description': this.state.description,
        //     'ProductPrice':this.state.price,
        // }
        
    //     const config = {
    //       headers: {
    //           'content-type': 'multipart/form-data',
              
    //       }
    //   };
    //   axios.post("http://localhost:5000/api/upload",formData.getAll,config)
    //       .then((response) => {
    //           alert("The file is successfully uploaded");
    //       }).catch((error) => {
    //   });
    // for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }
     //   console.log(Data);
    axios({
        method: 'post',
        url: 'http://localhost:5000/api/upload',
        data: formData,
       // headers: {'Content-Type': 'multipart/form-data' }
    }).then((response) => {
              alert("The file is successfully uploaded");
              console.log(response);
          }).catch((error) => {
            console.log(error);
    });
}
    


    render() {
        return (
            <div >
               <Form encType= "multipart/form-data">
                <FormGroup controlId="ProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name = "product_name" onChange = {this.HandleChange} />
                   
                </FormGroup>

                <FormGroup controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" onChange = {this.HandleChange}/>
                </FormGroup>
                <FormGroup controlId="Price">
                <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name = "price"  onChange = {this.HandleChange}/>
                </FormGroup>
                <FormGroup>
                    <Form.Control type = "file" name="ProductImage"  onChange = {this.handleFileChange} />
                </FormGroup>

                <Button variant="primary" type="submit" onClick= {this.HandleFormSubmit} >
                    Submit
                </Button>
            </Form>


            </div>
        )

    }
    
}

export default AddProductForm
