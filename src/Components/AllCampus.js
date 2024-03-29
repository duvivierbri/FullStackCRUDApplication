import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from "axios";

//importing components
import CampusCard from "./CampusCard";
import SingleCampus from "./SingleCampus";

class AllCampus extends Component{
    state = {
        campusData: [
            {"id": 1, "name":"Lehman", "description":"A big campus"},
            {"id": 2, "name":"Hunter", "description":"Another big campus"}], //List of campus objects (each campus) in database
        selectedCampus: [],
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
                loadMsg: ""
            });
        }
    }

    getCampusData = () => {
        //NOTE - I don't know what the URL is for the database to this is here as filler... UPDATE LATER!
        axios.get('http://localhost:4000/campuses')
        .then((response) => {
            this.setState({
                campusData: response.data.campuses
            })
        })
        .catch((error) => console.log(error));

        console.log("Campuses from Database: \n" + this.state.campusData)
    }

    sendDataToDetailsPage = (title, description) =>{
        
    }

    render(){
        //populate page with Campus Cards containing information from the database
        const showCards = this.state.campusData.map(card => <CampusCard campus={card}/>)
        return(
            <div>
                <h1 className="allCampusTitle">All Campuses</h1>
                <p className="allCampusDescription">Welcome to the all campuses page! Here you can take a look at all the 
                campuses you already have and create new ones!</p>

                <Link className="addCampusLink" to='/add-campus'>+ Add A New Campus!</Link>

                <h1>{this.state.loadMsg}</h1>

                {showCards}
            </div>
        )
    }
}export default AllCampus;

const CampusDetails = (name, description) => {
    return (
        <div className="singleCampusPage">
            {this.printInfo()}
            <h1>{name}</h1>

            <p>{description}</p>
        </div>
    )
} 