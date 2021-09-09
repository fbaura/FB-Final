import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationComponent from "./pages/navigation";
import HomeComponent from "./pages/home";
import About from "./pages/about";
import BlogComponent from "./pages/blog";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
         	<Router>
            <div>
              <h1>Fernando Baura</h1>
              <h2>Full Stack Final Project</h2>
              <NavigationComponent />

              <Switch>
                <Route exact path="/home" component={HomeComponent} />
                <Route path="/about-me" component={About} />
                <Route path="/blog" component={BlogComponent} />
              </Switch>
            </div>
          </Router> 

        <HomeComponent />
      </div>
    );
  }
}
