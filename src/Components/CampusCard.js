import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';

import SingleCampus from "./SingleCampus";

//Each Campus displayed on the All Campus page are displayed using one of these CampusCard components
class CampusCard extends React.Component{
    constructor(props){
        super(props);
    }

    deleteCampus = () => {
        const campusObject = {
            id: this.props.campus.id,
            name: this.props.campus.name,
            description: this.props.campus.description
        }

        console.log(campusObject)

        //Delete the item from the database and refresh the page!
        //Refreshing should repopulate the array with the updated data
        axios.delete('http://localhost:4000/campuses', { data: campusObject })
        .then(
            window.location.reload()
        )
    }

    showDetails = () => {
        let selectedCampus = {
            id: this.props.campus.id,
            name: this.props.campus.name,
            description: this.props.campus.description
        }

        console.log(selectedCampus);

        /*
        <SingleCampus campus={selectedCampus}/>

        window.location.replace("/single-campus");
        */
        
    }

    render(){
        return (
            <div className="campusCard">
                    <div className="campusImage">
                        <img src="https://st2.depositphotos.com/1310390/8059/v/600/depositphotos_80592078-stock-illustration-university-or-college-building.jpg"/>
                    </div>
                    
                    <div className="campusInfo">
                        <h3>Name: {this.props.campus.name}</h3>
                        <p>Description: {this.props.campus.description}</p>
                    </div>

                    <button className="campusDetails" onClick={this.showDetails}>See Details</button>
                    <button className="campusDelete" onClick={this.deleteCampus}>Delete</button>
                
            </div>
            
        )
    }
    
} export default CampusCard;