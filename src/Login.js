import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/main.css';
import './css/login.css';
import Navbar from './Common/Navbar';

class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay">
                </div>
                <div className="middlebox" id="login-box">
                    <div id="middlebox-topbar">
                        <p>Sign In</p>
                    </div>
                    <form id="login-form">
                        <div className="text-input">
                            <label htmlFor ="_name">Name</label>
                            <input type="text" id="_name" name="name" value="" />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_tel">Phone Number</label>
                            <input type="tel" id="_tel" name="tel" value="" />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_pass">Password</label>
                            <input type="password" id="_pass" name="pass" value="" />
                        </div>
                        <button id="login-button">Sign In</button>
                    </form>
                    <div id="signup">
                        <p>Need an account?</p>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
