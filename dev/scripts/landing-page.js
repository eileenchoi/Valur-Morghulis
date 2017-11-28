import React from "react";
import axios from "axios";
import { CountryDropdown } from 'react-country-region-selector';

var countries = require('country-list')();


class LandingPage extends React.Component {
    constructor(props){
        super();
        this.state({

        })
    }

    //method to take user inputs and store in variable
    // userInputs (){
    //     const cityInput = whatever user inputs
    //     const CatInput = whatever user inputs 
    
    // }
    //submit event handler
    // handleSubmit(e) {
    //     console.log("I am the handleSubmit")
    //     e.preventDefault();
    //     // this.props.submitForm(this.state.currentItem);
    //     // referencing a function where i'm calling and passing 
    //     this.setState({
            
            
    //     }); 
    // } 

    render(){
        return (
            <div>
                <div>
                    <h1>MeetUp Page</h1>
                </div>
                <div className="userInput">
                    <input type="text" className= 'cityInput' placeholder='city' onSubmit= {this.handleSubmit} />
                    <button onSubmit={this.handleSubmit}>City</button>

                    <input type="text" className= 'categoryInput' placeholder = 'category'/>
                    <button onSubmit={this.handleSubmit}>Category</button>
                </div>

                <select name="country-code">
                    <option value=""></option>
                </select>
                <input type="text" className="city-input"/>
                <button>Search</button>
            </div>
        )
    }
}

// html structure to take inputs(E) city, category
// Method to take hard - coded inputs and store in variable / state
// html structure to take button(E)
// method to take user input on submit / click
// Store user inputs as parameters / variables to use in ajax request


