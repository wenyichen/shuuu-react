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
                <div class="middlebox" id="login-box">
                    <div id="middlebox-topbar">
                        <p>Sign in</p>
                    </div>
                    <form id="login-form">
                        <div class="text-input">
                            <label for ="_name">Name</label>
                            <input type="text" id="_name" name="name" value="" />
                        </div>
                        <div class="text-input">
                            <label for="_tel">Phone Number</label>
                            <input type="tel" id="_tel" name="tel" value="" />
                        </div>
                        <div class="text-input">
                            <label for="_pass">Password</label>
                            <input type="password" id="_pass" name="pass" value="" />
                        </div>
                        <button id="login-button">Sign in</button>
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
