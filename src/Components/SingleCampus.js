import React, { Component } from "react"
import ReactDOM from 'react-dom';

class SingleCampus extends Component{
    state = {
        title: "TITLE GOES HERE", //List of campus objects (each campus) in database
        img: "",
        address: "ADDRESS GOES HERE",
        description: "DESCRIPTION GOES HERE"
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.address}</p>
                <p>{this.state.description}</p>
            </div>
        )
    }
}export default SingleCampus;