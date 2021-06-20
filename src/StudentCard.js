import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function StudentCard(props){
    return (
        <div className="StudentCard">
            <div className="StudentFirstName">
                <h3>Name: {props.student.firstName}</h3>
            </div>

            <div className="StudentLastName">
                <p>Description: {props.student.lastName}</p>
            </div>

            <div className="StudentGPA">
                <p>Students Enrolled: {props.student.gpa}</p>
            </div>

            <div className="StudentEmail">
                <p>Students Enrolled: {props.student.email}</p>
            </div>

            <div className="StudentID">
                <p>Students Enrolled: {props.student.collegeID}</p>
            </div>
        </div>
        
    )
} export default CampusCard;