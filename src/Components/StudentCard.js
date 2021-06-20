import axios from "axios";
import React from "react"
import ReactDOM from 'react-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
class StudentCard extends React.Component{
    constructor(props){
        super(props);
    }

    deleteStudent = () => {
        const studentObject = {
            id: this.props.student.id,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            gpa: this.props.student.gpa,
            email: this.props.student.email,
            collegeID: this.props.student.collegeID
        }

        console.log(studentObject)

        //Delete the item from the database and refresh the page!
        //Refreshing should repopulate the array with the updated data
        axios.delete('http://localhost:4000/ENTERSTUDENTDATABASEHERE', { data: studentObject })
        .then(
            window.location.reload()
        )
        
    }

    //get the information to send to the database
    render(){
        return (
            <div className="studentCard">
                <div className="studentImage">
                    <img src="https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg"/>
                </div>
                
                <div className="studentInfo">
                    <h3>Name: {this.props.student.firstName} {this.props.student.lastName}</h3>
                    <p>GPA: {this.props.student.gpa}</p>
                    <p>Email: {this.props.student.email}</p>
                    <p>College ID: {this.props.student.collegeID}</p>
                </div>
                
                <button className="studentDelete" onClick={this.deleteStudent}>Delete</button>
            </div>
        
        )
    }
} export default StudentCard;