import React, { Component } from 'react';
import './css/main.css';
import './css/info.css';
import Navbar from './Common/Navbar';
import Autocomplete from 'react-google-autocomplete';

class Autoaddress extends React.Component {
    constructor(props) {
      super(props)
      this.state = { address: '' }
      this.onChange = (address) => this.setState({ address })
    }
  
    render() {
  
      return (
        <Autocomplete 
        types={['address']}
        />
      )
    }
}

class InfoRider extends Component {

    render() {

        return (
            <div>
                <Navbar />
                <div id="overlay">
                </div>
                <div className="middlebox" id="info-box">
                    <div id="middlebox-topbar">
                        <p>Find a ride:</p>
                    </div>
                    <form id="info-form" method="GET" action="./search.html">
                        <div className="text-input">
                            <label htmlFor="_depart">Departing From:</label>
                            <Autoaddress type="text" id="_depart" name="depart" value="" required />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_dest">Destination:</label>
                            <Autoaddress type="text" id="_dest" name="dest" value="" required />
                        </div>
                        <div className="date-input">
                            <label htmlFor="_date">Date of Trip:</label>
                            <input type="date" id="_date" name="date" value="" required />
                        </div>
                        <div className="num-input">
                            <label htmlFor="_seats">Number of Seats Needed:</label>
                            <input type="number" id="_seats" name="seats" placeholder="1" min="1" max="7"
                            required />
                        </div>
                        <div className="tel-input">
                            <label htmlFor="_tel">Phone Number:</label>
                            <input type="tel" id="_tel" name="tel" value="" required/>
                        </div>
                        <div className="note-input">
                            <label id="notes_label" htmlFor="_notes">Notes:</label>
                            <textarea id="_notes" rows="5" name="notes"></textarea>
                        </div>
                        <button type="submit" id="continue-button">Continue</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default InfoRider;

