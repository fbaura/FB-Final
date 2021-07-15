import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "./navigation"
import HomeComponent from "./home"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Fernando Baura</h1>
        <h2>Full Stack Final Project</h2>
      </div>
    );
  }
}
