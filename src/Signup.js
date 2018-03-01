import React, { Component } from 'react';
import './css/main.css';
import './css/signup.css';
import Navbar from './Common/Navbar';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay">
                </div>
                <div className="middlebox" id="signup-box">
                    <div id="middlebox-topbar">
                        <p>Sign Up</p>
                    </div>
                    <form id="signup-form">
                        <div className="text-input">
                            <label htmlFor="_name">Name</label>
                            <input type="text" id="_name" name="name" value="" />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_tel">Phone Number</label>
                            <input type="text" id="_tel" name="tel" value="" />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_pass">Password</label>
                            <input type="password" id="_pass" name="pass" value="" />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_confirmpass">Confirm Password</label>
                            <input type="password" id="_confirmpass" name="confirmpass" value="" />
                        </div>
                        <button type="submit" id="signup-button">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
