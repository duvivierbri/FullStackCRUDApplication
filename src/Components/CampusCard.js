import React, { Component } from "react"
import ReactDOM from 'react-dom';

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

            <button>Edit</button>
            <button>Delete</button>
        </div>
        
    )
} export default CampusCard;