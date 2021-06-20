import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
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

    //Sends the information off to database
    addCampus = async(newCampusObject) => {
        //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
       let response = axios.post('http://localhost:4000/campuses', newCampusObject)
       .then((response) => {
           console.log(response)
       })
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
            <div className="AddCampusForm">
                <form onSubmit = {this.submitFunction}>
                    <p className="campusFormTitle">Add A New Campus Here!</p>

                    <input className = "campusFormInputs" type="text" onChange = {this.updateName} placeholder = "Name of Campus" required/>
                    <br/>

                    <input className = "campusFormInputs" type="text" onChange = {this.updateDescription} placeholder = "Description of Campus" required/>
                    <br/>

                    <input className = "campusFormInputs" type="text" onChange = {this.updateAddress} placeholder = "Address of Campus" required/>
                    <br/>

                    <button type="submit">Submit</button>
                    <br/>
                    <Link className="newCampusBackButton" to='/all-campus'>Go Back</Link>
                </form>
            </div>
        )
    }
    
} export default AddCampus;