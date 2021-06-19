import React, { Component } from "react"
import ReactDOM from 'react-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function CampusCard(props){
    return (
        <div className="campusCard">
            <img src=""/>
            <div className="campusTitle">
                <h3>Name: {props.campus.name}</h3>
            </div>

            <div className="CampusDescription">
                <p>Description: {props.campus.description}</p>
            </div>

            <div className="CampusStudentsEnrolled">
                <p>Students Enrolled: {props.campus.students}</p>
            </div>

            <button onClick={props.deleteFunction}>Delete</button>
        </div>
        
    )
} export default CampusCard;