import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

//Import Components
import AllStudentsPage from './AllStudentsPage';

class NewStudentForm extends Component{
  constructor(props){
      super(props);
      
      this.state = {
        firstName: '',
        lastName: '',
        gpa: '',
        email: '',
        collegeID: ''
      }
  }

  updateFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  updateLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  updateGPA = (event) => {
    this.setState({
      gpa: event.target.value
    });
  }

  updateEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  updateCollegeID = (event) => {
    this.setState({
      collegeID: event.target.value
    })
  }

  submitFunction = (event) => {
    //Do not know the url for student database, so I added a placeholder for now - UPDATE LATER!
    axios.post('http://localhost:3000/STUDENTDATABASEURLHERE',{
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'gpa': this.state.gpa,
      'email': this.state.email,
      'collegeID': this.state.collegeID
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  //Sends the information off to database
  addStudent = async(newStudentObject) => {
    //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
   let response = axios.post('http://localhost:3000/STUDENTDATABASEHERE', newStudentObject)
   .then((response) => {
     alert("Student Added! You can see the new student in the \"All Students\" page!");
     console.log(response)
   })
   .catch((error) => console.log(error))

   //Reset values back to default 
   {this.setState({
      firstName: '',
      lastName: '',
      gpa: '',
      email: '',
      collegeID: ''
   })}
}

  render(){
  return(
    <div>
    <form className="newStudentForm" onSubmit={this.submitFunction}>
      <p class="newStudentTitle">Create A New Student</p>
      <input className="newStudentInputs" placeholder = "Your First Name" onChange={this.updateFirstName} required/>
      <br/>
      <input className="newStudentInputs" placeholder = "Your Last Name" onChange={this.updateLastName} required/>
      <br/>
      <input className="newStudentInputs" placeholder = "Your GPA" onChange={this.updateGPA} required/>
      <br/>
      <input className="newStudentInputs" placeholder = "Your E-Mail" onChange={this.updateEmail} required/>
      <br/>
      <input className="newStudentInputs" placeholder = "Your College ID" onChange={this.updateCollegeID} required/>
      <br/>
      <button type="submit">Submit</button>
      <br/>
      <Link className="newStudentBackButton" to='/all-students'>Go Back</Link>
    </form>

    
    
    </div>
  );
}
}

export default NewStudentForm;