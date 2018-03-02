import React, { Component } from 'react';
import './css/main.css';
import './css/info.css';
import Navbar from './Common/Navbar';
import Autocomplete from 'react-google-autocomplete';
//import IntlTelInput from 'react-intl-tel-input';
//import 'file?name=libphonenumber.js!./node_modules/react-intl-tel-input/dist/libphonenumber.js';
//import './node_modules/react-intl-tel-input/dist/main.css';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';


class InfoDriver extends Component {
    render() {

        return (
            <div>
                <Navbar />
                <div id="overlay">
                </div>
                <div className="middlebox" id="info-box">
                    <div id="middlebox-topbar">
                        <p>Find riders:</p>
                    </div>
                    <form id="info-form" method="GET" action="./trips.html">
                        <div className="text-input">
                            <label htmlFor="_depart">Departing From:</label>
                            <Autocomplete id="_depart" type="text" name="depart" required/>
                        </div>
                        <div className="text-input">
                            <label htmlFor="_dest">Destination:</label>
                            <Autocomplete id="_dest" type="text" name="dest" required/>
                        </div>
                        <div className="date-input">
                            <label htmlFor="_date">Date of Trip:</label>
                            <input type="date" id="_date" name="date" required/>
                        </div>
                        <div className="text-input">
                            <label htmlFor="_type">Type of Car:</label>
                            <input type="text" id="_type" name="type" required/>
                        </div>
                        <div className="text-input">
                            <label htmlFor="_carNo.">Car NO.:</label>
                            <input type="text" id="_carNo." name="carNo." required/>
                        </div>
                        <div className="num-input">
                            <label htmlFor="_seats">Number of Seats:</label>
                            <input type="number" id="_seats" name="seats" min="1" max="7"
                            placeholder="4" required/>
                        </div>
                        <div className="tel-input">

                            <Phone
                              placeholder="Enter phone number"
                              onChange={ phone => this.setState({ phone }) } />
                        </div>
                        <div className="note-input">
                            <label id="notes_label" htmlFor="_notes">Notes:</label>
                            <textarea id="_notes" rows="5" name="notes"></textarea>
                        </div>
                        <div className="button" type="submit" id="continue-button">Continue</div>
                    </form>
                </div>
            </div>
        );
    }
}

export default InfoDriver;
