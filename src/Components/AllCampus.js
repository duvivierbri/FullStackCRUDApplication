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

    componentDidMount(){
        //get data when site first opens
        //this.fetchData();

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

    fetchData = () => {
        axios.get('./data.json')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });


        /*
        fetch('./data.json', {
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
             body: JSON.stringify(data)
          })
          .then((response) => response.json())
          .then((data) => {
            console.log('Campus Data: ' + data);
            this.setState({
                campusData: data.name
            })
          }).catch((error) => {
              console.log(error);
          });
          */
    }

    render(){
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