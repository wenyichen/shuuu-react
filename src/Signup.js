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
                <div class="middlebox" id="signup-box">
                    <div id="middlebox-topbar">
                        <p>Sign Up</p>
                    </div>
                    <form id="signup-form">
                        <div class="text-input">
                            <label for="_name">Name</label>
                            <input type="text" id="_name" name="name" value="" />
                        </div>
                        <div class="text-input">
                            <label for="_tel">Phone Number</label>
                            <input type="text" id="_tel" name="tel" value="" />
                        </div>
                        <div class="text-input">
                            <label for="_pass">Password</label>
                            <input type="password" id="_pass" name="pass" value="" />
                        </div>
                        <div class="text-input">
                            <label for="_confirmpass">Confirm Password</label>
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
