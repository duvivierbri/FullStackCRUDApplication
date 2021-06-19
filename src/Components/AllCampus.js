import React, { Component } from "react"
import ReactDOM from 'react-dom';
import axios from "axios";

//importing components
import CampusCard from "./CampusCard";
import AllCampusHeader from "./AllCampusHeader";
import AddCampus from "./AddCampus";

class AllCampus extends Component{
    state = {
        campusData: [{"name":"Lehman", "description":"A big campus", "students": 7}], //List of campus objects (each campus) in database
        loadMsg: ""
    }

    //When the page loads
    componentDidMount(){
        //Get campus data from database upon mount so cards can be displayed
        {this.getCampusData}

        if (this.state.campusData.length == 0){
            this.setState({
                loadMsg: "You have no campuses in database"
            });
        } else {
            this.setState({
                loadMsg: "Your Campuses"
            });
        }
    }

    getCampusData = () => {
        axios.get('http://localhost:3000/APIURLGOESHERE')
        .then((response) => {
            this.setState({
                campusData: response
            })
        })
        .catch((error) => console.log(error));

        console.log("Campuses from Database: \n" + this.state.campusData)
    }

    render(){
        //populate page with Campus Cards containing information from the database
        const showCards = this.state.campusData.map(card => <CampusCard campus={card}/>)
        return(
            <div>
                <AllCampusHeader/>
                <AddCampus/>
                <h1>{this.state.loadMsg}</h1>
                {showCards}
            </div>
        )
    }
}export default AllCampus;