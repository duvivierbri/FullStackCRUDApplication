import React, { Component } from "react"
import ReactDOM from 'react-dom';

function AddCampus(props){
    return (
        <div>
            <form>
                <p>Add A New Campus</p>
                <label>Name</label>
                <input name="name" type="text" />

                <label>Description</label>
                <input name="description" type="text" />
                
                <label>Students Enrolled</label>
                <input name="address" type="text" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
} export default AddCampus;