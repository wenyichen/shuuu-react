import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/main.css';
import './css/start.css';
import Navbar from './Common/Navbar';

class Start extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="mb-container">
                    <div className="middlebox" id="start-box">
                        <div id="middlebox-topbar">
                            <p>I am a:</p>
                        </div>
                        <div id="start-form">
                            <Link to="/info/riders">
                                <div id="rider">
                                    <span id="rider-text">Rider</span>
                                </div>
                            </Link>
                            <Link to="/info/drivers">
                                <div id="driver">
                                    <span id="driver-text">Driver</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Start;
