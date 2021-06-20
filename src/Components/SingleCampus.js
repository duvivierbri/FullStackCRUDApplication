import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function SingleCampus(props){
    const sendDetails = <SingleCampus title={props.campus.name}/>;
    return (
        <div className="singleCampusPage">
            <h1>{props.campus.name}</h1>
            <p>{props.campus.description}</p>
        </div>
    )
} export default SingleCampus;