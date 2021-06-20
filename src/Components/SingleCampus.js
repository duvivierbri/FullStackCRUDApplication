import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
function SingleCampus(props){
    return (
        <div className="singleCampusPage">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
} export default SingleCampus;