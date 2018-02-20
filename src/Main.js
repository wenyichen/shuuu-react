import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import './css/main.css';
import './css/index.css';
import Navbar from './Common/Navbar';

class Main extends Component {
    render() {
        return (
            <div>
                < Navbar />
                <div id="middlebar">
                    <h1>
                        <Link to="/">shuuu</Link>
                    </h1>
                </div>
                <div id="start">
                    <button>
                        <Link to="/start">Get Started!</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Main;
