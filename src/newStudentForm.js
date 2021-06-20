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

    window.location.replace("/allstudents")
  }

  render(){
  return(
    
    <div>
    <form>
      <h1>Create A New Student</h1>
      <input placeholder = "Your First Name" onChange={this.updateFirstName}/>
      <br/>
      <input placeholder = "Your Last Name" onChange={this.updateLastName}/>
      <br/>
      <input placeholder = "Your GPA" onChange={this.updateGPA}/>
      <br/>
      <input placeholder = "Your E-Mail" onChange={this.updateEmail}/>
      <br/>
      <input placeholder = "Your College ID" onChange={this.updateCollegeID}/>
      <br/>
      <button type="submit">Submit</button>
    </form>

    <Link to='/allstudents'>Go Back</Link>
    
    </div>
  );
}
}

export default NewStudentForm;