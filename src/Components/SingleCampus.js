import { render } from "@testing-library/react";
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
class SingleCampus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentCampus: []
        }
    }
    
    render(){
        return (
            <div className="singleCampusPage">
                <h1>{this.props.campus}</h1>
            </div>
        )
    }
} export default SingleCampus;