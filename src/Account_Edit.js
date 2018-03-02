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
                            <div id="name-display" className="name">
                                <label htmlFor="_name">Name</label>
                                <input id="_name" name="name" defaultValue="John Smith" />
                            </div>
                            <div id="tel-display" className="tel">
                                <label htmlFor="_tel">Phone Number</label>
                                <input id="_tel" name="tel" defaultValue="(123)-456-7890" />
                            </div>
                            <div className="old_pass">
                                <label htmlFor="_curpass">Current Password</label>
                                <input type="password" id="_curpass" name="curpass"
                                defaultValue="********" />
                            </div>
                            <div className="new_pass">
                                <label htmlFor="_pass">New Password</label>
                                <input type="password" id="_pass" name="pass" defaultValue="" />
                            </div>
                            <div className="confirm_pass">
                                <label htmlFor="_confirmpass">Confirm Password</label>
                                <input type="password" id="_confirmpass" name="confirmpass"
                                defaultValue="" />
                            </div>
                            <Link to="/Account">
                            <div className="button" id="save-button">Save</div>
                            </Link>

                        </form>
                </div>
            </div>
        );
    }

/*    function edit(event) {
        var button = event.target;
        var fo = button.parentElement;
        var content_name = null;
        for (var i = 0; i < fo.childNodes.length; i++) {
            if (fo.childNodes[i].className == "name") {
                content_name = fo.childNodes[i].value;
                fo.childNodes[i].value = "";
                break;
            }
        }
        var content_tel = null;
        for (var i = 0; i < fo.childNodes.length; i++) {
            if (fo.childNodes[i].className == "tel") {
                content_tel = fo.childNodes[i].value;
                fo.childNodes[i].value = "";
                break;
            }
        }
        var content_pass = null;
        for (var i = 0; i < fo.childNodes.length; i++) {
            if (fo.childNodes[i].className == "new_pass") {
                content_pass = fo.childNodes[i].value;
                fo.childNodes[i].value = "";
                break;
            }
        }
        const info = () => [
            <p key="n" content_name />,
            <p key="t" content_tel />,
            <p key="p" content_pass />
        ];

        return info;
    }*/
}

export default Account_Edit;
