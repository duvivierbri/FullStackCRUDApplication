import React, { Component } from "react"
import ReactDOM from 'react-dom';
import axios from "axios";

//importing components
import CampusCard from "./CampusCard";
import AddCampus from "./AddCampus";

class AllCampus extends Component{
    state = {
        campusData: [{"name":"Lehman", "description":"A big campus", "students": 7}], //List of campus objects (each campus) in database
        loadMsg: ""
    }

    //When the page loads
    componentDidMount(){
        //Get campus data from database upon mount so cards can be displayed
        this.getCampusData()

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
        //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
        axios.get('http://localhost:4000/campuses')
        .then((response) => {
            console.log(response)
            this.setState({
                campusData: response.data.campuses
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
                <h1>All Campuses</h1>

                <p>Welcome to the all campuses page! Here you can take a look at all the 
                campuses you already have and create new ones!</p>

                <AddCampus/>

                <h1>{this.state.loadMsg}</h1>

                {showCards}
            </div>
        )
    }
}export default AllCampus;