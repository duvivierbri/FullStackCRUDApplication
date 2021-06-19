import React, { Component } from "react"
import ReactDOM from 'react-dom';
const axios = require('axios');

class AddCampus extends Component{
    state = {
        name: '',
        address: '',
        description: '',
        image: 'https://www.freepik.com/free-vector/young-students-walking-front-university-college-building-flat-vector-illustration-cartoon-people-relaxing-sitting-grass-campus_10174100.htm'
    }

    //Updates the name in form
    updateName = (event) =>{
        event.preventDefault();

        this.setState({
            name: event.target.value
        });
    }
    
    //Updates the address in form
    updateAddress = (event) =>{
        event.preventDefault();
        this.setState({
            address: event.target.value
        });
    }

    //Updates the description in form
    updateDescription = (event) =>{
        event.preventDefault();
        this.setState({
            description: event.target.value
        });
    }

    //Called when the user submits the form (with button)
    submitFunction = () =>{  
        //Creates new campus with the information given to be sent to database
        const newCampus = {
           name: this.state.name,
           address: this.state.address,
           description: this.state.description,
           image: this.state.image
        }

       this.addCampus(newCampus);
    }

    //Adds information to database
    addCampus = async(newCampusObject) => {
        //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
       let response = axios.post('http://localhost:3000/APIURLGOESHERE', newCampusObject)
       .then((response) => console.log(response.data))
       .catch((error) => console.log(error))

       //Reset values back to default 
       {this.setState({
           name: '',
           address: '',
           description: '',
           image: this.state.image
       })}
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.submitFunction}>
                    <p>Add A New Campus</p>
                    <label>Name</label>
                    <input type="text" onChange = {this.updateName} required/>
    
                    <label>Description</label>
                    <input type="text" onChange = {this.updateDescription} required/>
                    
                    <label>Address</label>
                    <input type="text" onChange = {this.updateAddress} required/>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
    
} export default AddCampus;