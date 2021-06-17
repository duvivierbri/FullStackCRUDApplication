import React, { Component } from "react"
import ReactDOM from 'react-dom';

function CampusCard(props){
    return (
        <div className="campusCard">
            <div className="campusTitle">
                <h1>{props.campusTitle}</h1>
            </div>

            <div className="CampusDescription">
                <p>{props.campusDescription}</p>
            </div>

            <div className="LinkToDetailsPage">
                <a href={props.detailsLink}>See More</a>
            </div>
        </div>
        
    )
} export default CampusCard;