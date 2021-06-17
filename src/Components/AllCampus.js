import React, { Component } from "react"
import ReactDOM from 'react-dom';

//importing components
import CampusCard from "./CampusCard";
import AllCampusHeader from "./AllCampusHeader";

class AllCampus extends Component{
    state = {
        campusData: [] //List of campus objects (each campus) in database
    }

    render(){
        return(
            <AllCampusHeader/>
        )
    }
}export default AllCampus;