import React, { Component } from "react"
import ReactDOM from 'react-dom';

function CampusCard(props){
    return (
        <div class="campusCard">

            <div class="image">
                <img src={props.imageSource}/>
            </div>

            <div class="campusTitle">
                <h1>{props.campusTitle}</h1>
            </div>

            <div class="CampusDescription">
                <p>{props.campusDescription}</p>
            </div>

            <div class="LinkToDetailsPage">
                <a href={props.detailsLink}>See More</a>
            </div>
        </div>
        
    )
} export default CampusCard;