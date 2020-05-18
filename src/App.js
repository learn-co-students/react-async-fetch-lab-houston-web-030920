import React, { Component } from "react";

// create your App component here
export default class App extends Component {
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
    }
    render(){
        return(
            <h1>hi</h1>
        )
    }
}