import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function StudentCard(props){
    return (
        <div className="StudentCard">
            <div className="StudentFirstName">
                <h3>Name: {props.student.firstName} {props.student.lastName}</h3>
            </div>

            <div className="StudentGPA">
                <p>GPA: {props.student.gpa}</p>
            </div>

            <div className="StudentEmail">
                <p>Email: {props.student.email}</p>
            </div>

            <div className="StudentID">
                <p>College ID: {props.student.collegeID}</p>
            </div>
        </div>
        
    )
} export default StudentCard;