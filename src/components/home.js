import React, { Component } from 'react';
import axios from "axios";

export default class HomeComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <button>About</button>
            <button>Contact</button>
            <button>Blog</button>
            <button>Add Blog</button>
            </div>
        )
    }
}