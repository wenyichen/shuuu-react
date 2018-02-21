import React, { Component } from 'react';
import './css/main.css';
import './css/info.css';
import Navbar from './Common/Navbar';
import Autocomplete from 'react-google-autocomplete';

class InfoDriver extends Component {

    render() {

        return (
            <div>
                <Navbar />
                <div id="overlay">
                </div>
                <div class="middlebox" id="info-box">
                    <div id="middlebox-topbar">
                        <p>Find riders:</p>
                    </div>
                    <form id="info-form" method="GET" action="./trips.html">
                        <div class="text-input">
                            <label for="_depart">Departing From:</label>
                            <Autocomplete id="_depart" type="text" name="depart" required/>
                        </div>
                        <div class="text-input">
                            <label for="_dest">Destination:</label>
                            <Autocomplete id="_dest" type="text" name="dest" required/>
                        </div>
                        <div class="date-input">
                            <label for="_date">Date of Trip:</label>
                            <input type="date" id="_date" name="date" required/>
                        </div>
                        <div class="text-input">
                            <label for="_type">Type of Car:</label>
                            <input type="text" id="_type" name="type" required/>
                        </div>
                        <div class="text-input">
                            <label for="_carNo.">Car NO.:</label>
                            <input type="text" id="_carNo." name="carNo." required/>
                        </div>
                        <div class="num-input">
                            <label for="_seats">Number of Seats:</label>
                            <input type="number" id="_seats" name="seats" min="1" max="7"
                            placeholder="4" required/>
                        </div>
                        <div class="tel-input">
                            <label for="_tel">Phone Number:</label>
                            <input type="tel" id="_tel" name="tel" placeholder="(XXX)-XXX-XXXX"
                            pattern="\d{4}-\d{3}-\d{4}$" required/>
                        </div>
                        <div class="note-input">
                            <label id="notes_label" for="_notes">Notes:</label>
                            <textarea id="_notes" rows="5" name="notes"></textarea>
                        </div>
                        <button type="submit" id="continue-button">Continue</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default InfoDriver;

