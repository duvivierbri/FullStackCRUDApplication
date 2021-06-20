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
        studentData: [
            {id: 1, firstName: "Emily", lastName: "Brown", gpa: 3.20, email: "emily@mail.com", collegeID: 12345678}, 
            {id: 2, firstName: "Sara", lastName: "Lopez", gpa: 2.9, email: "sara@mail.com", collegeID: 10093456}],
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
        axios.get('http://localhost:4000/ENTERSTUDENTDATABASEHERE')
        .then((response) => {
            this.setState({
                studentData: response
            })
        })
        .catch((error) => console.log(error));

        console.log("Students from Database: \n" + this.state.studentData)
    }

    //function to handle deleting
    toBeDeleted = (id, name, gpa, email, collegeID) => {
        console.log();
    }

    render(){
      //Display all students from database
      const showStudents = this.state.studentData.map(data => <StudentCard student={data} deleteFunction={this.toBeDeleted}/>)
        return(
            <div>
                <h1 className="allStudentsTitle">ALL STUDENTS</h1>
                <p className="allStudentsDescription">Welcome to the all students page! Here, you can see all of the students, and click on 
                    them for more information like their name, ID number, and much more!
                </p>
                <Link className="addStudentLink" to='/add-student'>+ Add New Student</Link>
                <p>{this.state.loadMsg}</p>

                <div class="studentCardsDisplay">
                    {showStudents}
                </div>
            </div>
        );
    }
}

export default AllStudentsPage;