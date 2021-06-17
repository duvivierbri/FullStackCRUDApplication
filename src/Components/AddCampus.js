import React, { Component } from "react"
import ReactDOM from 'react-dom';

function AddCampus(props){
    return (
        <div>
            <form>
                <p>Add A New Campus</p>
                <label for="name">Name</label>
                <input name="name" type="text" />

                <label for="description">Description</label>
                <input name="description" type="text" />
                
                <label for="address">City</label>
                <input name="address" type="text" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
} export default AddCampus;