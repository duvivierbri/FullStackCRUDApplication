import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

class AllStudentsPage extends Component{
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

  render(){
  return( 
    <h1>All Students!!</h1>
  );
}
}

export default AllStudentsPage;