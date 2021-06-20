import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
//importing resources
import StudentCard from './StudentCard';

class AllStudentsPage extends Component{
  constructor(props){
      super(props);
      
      this.state = {
        //Student data has mock data so you can get an idea of what the cards look like :)
        studentData: [{firstName: "Emily", lastName: "Brown", gpa: 3.20, email: "emily@mail.com", collegeID: 12345678}],
        loadMsg:""
      }
  }

    //When the page loads
    componentDidMount(){
        //Get student data from database upon mount so cards can be displayed
        this.getStudentData()

        if (this.state.studentData.length == 0){
            this.setState({
                loadMsg: "You have no students in database"
            });
        } else {
            this.setState({
                loadMsg: ""
            });
        }
    }

    getStudentData = () => {
        //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
        axios.get('http://localhost:3000/STUDENTDATAURLGOESHERE')
        .then((response) => {
            this.setState({
                studentData: response
            })
        })
        .catch((error) => console.log(error));

        console.log("Students from Database: \n" + this.state.studentData)
    }

  render(){
      //Display all students from database
      const showStudents = this.state.studentData.map(data => <StudentCard student={data}/>)
        return(
            <div>
                <h1>All Students!!</h1>
                <Link to='/new-student'>Click Here To Add A Student!</Link>
                <p>{this.state.loadMsg}</p>
                {showStudents}
            </div>
        );
    }
}

export default AllStudentsPage;