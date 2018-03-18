import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/main.css';
import '../css/index.css';
import Navbar from '../Common/Navbar';

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar title={false}/>
                <div id="middlebar">
                    <h1>
                        <Link to="/">shuuu</Link>
                    </h1>
                </div>
                <div id="start">
                    <Link to="/start">
                        <div className="button"> Get Started!</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Main;
