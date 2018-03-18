import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../css/main.css";
import "../css/info.css";
import Navbar from "../Common/Navbar";
import * as tripActions from "../actions/tripActions";
import * as accountActions from "../actions/accountActions";
import Autocomplete from "react-google-autocomplete";
//import IntlTelInput from 'react-intl-tel-input';
//import 'file?name=libphonenumber.js!./node_modules/react-intl-tel-input/dist/libphonenumber.js';
//import './node_modules/react-intl-tel-input/dist/main.css';
import toastr from "toastr";

class InfoDriver extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            trip: {},
            errors: {},
            saving: false
        };

        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
        this.redirect = this.redirect.bind(this);
        this.addTripToAccount = this.addTripToAccount.bind(this);
    }

    change(event) {
        const field = event.target.name;
        let account = Object.assign({}, this.state.account);
        account[field] = event.target.value;
        return this.setState({ account: account });
    }

    generateId = trip => {
        return "0" + trip.date + trip.depart + trip.dest + trip.driver + "0";
    };

    save(event) {
        event.preventDefault();

        this.setState({ saving: true });

        var id = this.props.loggedin.uid;

        var account = {};
        for (var a of this.props.accounts) {
            if (a.id == id) {
                account = Object.assign({}, a);
                break;
            }
        }
        let tripCopy = Object.assign({}, this.state.trip, {
            phone: account.phone,
            driver: account.name,
            chats: []
        });
        this.setState({
            trip: tripCopy
        });

        this.props.actions
            .saveTrip(this.state.trip)
            .then(() => {
                this.redirect();
            })
            .catch(error => {
                toastr.error(error);
            });

        this.addTripToAccount(this.generateId(this.state.trip), account);
    }

    addTripToAccount(tid, acc) {
        var acc = Object.assign(acc);
        acc.trips = [...acc.trips, tid];
        this.props.accActions.saveAccount(acc);
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success("Trip saved");
        console.log(this.context);
        this.context.router.history.push("/trips");
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay" />
                <div className="middlebox" id="info-box">
                    <div id="middlebox-topbar">
                        <p>Find riders:</p>
                    </div>
                    <form id="info-form" method="GET">
                        <div className="text-input">
                            <label htmlFor="_depart">Departing From:</label>
                            <Autocomplete
                                id="_depart"
                                type="text"
                                name="depart"
                                value={this.state.trip.depart}
                                onChange={this.change}
                                required
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_dest">Destination:</label>
                            <Autocomplete
                                id="_dest"
                                type="text"
                                name="dest"
                                value={this.state.trip.dest}
                                onChange={this.change}
                                required
                            />
                        </div>
                        <div className="date-input">
                            <label htmlFor="_date">Date of Trip:</label>
                            <input
                                type="date"
                                id="_date"
                                name="date"
                                value={this.state.trip.date}
                                onChange={this.change}
                                required
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_type">Type of Car:</label>
                            <input
                                type="text"
                                id="_type"
                                name="type"
                                value={this.state.trip.type}
                                onChange={this.change}
                                required
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_carNo.">Car NO.:</label>
                            <input
                                type="text"
                                id="_carNo."
                                name="carno"
                                value={this.state.trip.carno}
                                onChange={this.change}
                                required
                            />
                        </div>
                        <div className="num-input">
                            <label htmlFor="_seats">Number of Seats:</label>
                            <input
                                type="number"
                                id="_seats"
                                name="seats"
                                min="1"
                                max="7"
                                placeholder="4"
                                value={this.state.trip.seats}
                                onChange={this.change}
                                required
                            />
                        </div>
                        <div
                            className="button"
                            type="submit"
                            id="continue-button"
                            onClick={this.save}
                        >
                            Continue
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

//Pull in the React Router context so router is available on this.context.router.
InfoDriver.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        trips: state.trips,
        loggedin: state.loggedin,
        accounts: state.accounts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(tripActions, dispatch),
        accActions: bindActionCreators(accountActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoDriver);
