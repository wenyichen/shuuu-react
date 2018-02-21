import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/index.css';
import './css/main.css';
import Navbar from './Common/Navbar';

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
                        <button>
                            Get Started!
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Main;
