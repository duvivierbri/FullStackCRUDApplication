import React, { Component } from "react"
import ReactDOM from 'react-dom';

function Header(props){
    return (
        <div>
            <div class="NavMenu">
                <ul id="navigationBar" class="navigationMenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Students</a></li>
                    <li><a href="#">Campuses</a></li>
                </ul>
            </div>

            <h1>Welcome to the College Search Homepage!</h1>

        </div>
        
    )
} export default Header;