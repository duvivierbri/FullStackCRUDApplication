import React, { Component } from "react"
import ReactDOM from 'react-dom';

class Homepage extends Component{
    render(){
        return(
            <div className="homepageHeader">
                <div className="homepageTitle">
                    <h1>Welcome to the College Database Homepage!</h1>
                </div>
                <p className = "homeIntro">
                    Hello There! :) <br/>
                    Welcome to your personal college database! This is a resource created just for you!
                    Here, you can keep track of your campus and student information. 
                </p>

                <p className = "homeOverview">
                    WHAT YOU CAN DO:<br/>
                    Keep a log of student information (Name, GPA, CollegeID, and email) as well as the information
                    of multiple campuses/universities (Name, Address and a short description of your choosing :) ) 
                </p>

                <p className = "homeConclusion">
                    Use the navigation menu to take a look around and enjoy!
                </p>
            </div>
            
        )
    }
}export default Homepage;