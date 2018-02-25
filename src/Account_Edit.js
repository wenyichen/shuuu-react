import React, { Component } from 'react';
import './css/main.css';
import './css/account.css';
import Navbar from './Common/Navbar';
import { Link } from "react-router-dom";

class Account_Edit extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay">
                </div>
                <div className="middlebox" id="acc-box">
                        <div id="middlebox-topbar">
                            <p>My Account:</p>
                        </div>
                        <form id="acc-form">
                            <div id="name-display">
                                <label htmlFor="_name">Name</label>
                                <input id="_name" name="name" defaultValue="John Smith" />
                            </div>
                            <div id="tel-display">
                                <label htmlFor="_tel">Phone Number</label>
                                <input id="_tel" name="tel" defaultValue="(123)-456-7890" />
                            </div>
                            <div className="text-input">
                                <label htmlFor="_curpass">Current Password</label>
                                <input type="password" id="_curpass" name="curpass"
                                defaultValue="********" />
                            </div>
                            <div className="text-input">
                                <label htmlFor="_pass">New Password</label>
                                <input type="password" id="_pass" name="pass" defaultValue="" />
                            </div>
                            <div className="text-input">
                                <label htmlFor="_confirmpass">Confirm Password</label>
                                <input type="password" id="_confirmpass" name="confirmpass"
                                defaultValue="" />
                            </div>
                            <Link to="/Account">
                            <button id="save-button">Save</button>
                            </Link>

                        </form>
                </div>
            </div>
        );
    }
}

export default Account_Edit;
