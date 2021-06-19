import React, { Component } from "react"
import ReactDOM from 'react-dom';

class SingleCampus extends Component{
    state = {
        title: "Lehman", //List of campus objects (each campus) in database
        img: "",
        description: "A big campus",

    }

    render(){
        return(
            <h1>{this.state.title}</h1>
        )
    }
}export default SingleCampus;