import React, { Component } from "react"
import ReactDOM from 'react-dom';

class Homepage extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to the College Database Homepage!</h1>
                <img src="https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/32/1502291891-royal-roads-university.jpg"/>
                <p>
                    Hello There! :) <br/>
                    Welcome to your personal college database! This is a resource created just for you where you can keep track of 
                    your campuses, students, and their information. Take a look around, and enjoy!
                </p>
            </div>
            
        )
    }
}export default Homepage;