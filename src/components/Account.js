import React, { Component } from "react";
import "../css/main.css";
import "../css/account.css";
import Navbar from "../Common/Navbar";
import { Link } from "react-router-dom";

class Account extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay" />
                <div className="middlebox" id="acc-box">
                    <div id="middlebox-topbar">
                        <p>My Account:</p>
                    </div>
                    <form id="acc-form">
                        <div id="name-display">
                            <label htmlFor="_name">Name</label>
                            <p id="_name" name="name">
                                John Smith
                            </p>
                        </div>
                        <div id="tel-display">
                            <label htmlFor="_tel">Phone Number</label>
                            <p id="_tel" name="tel">
                                (123)-456-7890
                            </p>
                        </div>
                        <div className="text-input">
                            <label htmlFor="_curpass">Password</label>
                            <p type="password" id="_curpass" name="curpass">
                                ********
                            </p>
                        </div>
                        <Link to="/account/edit">
                            <div className="button" id="edit-button">
                                Edit
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Account;
