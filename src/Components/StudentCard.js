import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function StudentCard(props){
    return (
            <div className="studentCard">
                <div className="studentImage">
                    <img src="https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg"/>
                </div>
                
                <div className="studentInfo">
                    <h3>Name: {props.student.firstName} {props.student.lastName}</h3>
                    <p>GPA: {props.student.gpa}</p>
                    <p>Email: {props.student.email}</p>
                    <p>College ID: {props.student.collegeID}</p>
                </div>
            </div>
        
    )
} export default StudentCard;