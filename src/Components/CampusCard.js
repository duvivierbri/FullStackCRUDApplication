import React, { Component } from "react"
import ReactDOM from 'react-dom';

function CampusCard(props){
    return (
        <div className="campusCard">
            <div className="campusTitle">
                <h3>{props.campus.name}</h3>
            </div>

            <div className="CampusDescription">
                <p>{props.campus.description}</p>
            </div>

            <div className="CampusStudentsEnrolled">
                <p>{props.campus.students}</p>
            </div>

            <div className="LinkToDetailsPage">
                <a href={props.detailsLink}>See More</a>
            </div>

            <button>Edit</button>
            <button>Delete</button>
        </div>
        
    )
} export default CampusCard;