import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function CampusCard(props){
    return (
        <div className="campusCard">
            <div className="campusImage">
                <img src="https://st2.depositphotos.com/1310390/8059/v/600/depositphotos_80592078-stock-illustration-university-or-college-building.jpg"/>
            </div>
            
            <div className="campusInfo">
                <h3>Name: {props.campus.name}</h3>
                <p>Description: {props.campus.description}</p>
            </div>

            <button className="campusDelete" onClick={props.deleteFunction}>Delete</button>
        </div>
        
    )
} export default CampusCard;