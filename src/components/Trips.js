import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../css/main.css";
import "../css/trips.css";
import "../../node_modules/open-iconic/font/css/open-iconic-bootstrap.css";
import * as accountActions from "../actions/accountActions";
import Navbar from "../Common/Navbar";
import Trip from "./Trip";

class Trips extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var id = this.props.loggedin.uid;

        for(var a of this.props.accounts) {
            console.log(a);
            if (a.id == id) {
                var account = Object.assign({}, a);
                break;
            }
        }

        var trips = [];
        for(var trip of this.props.trips) {
            if (account.trips.includes(trip.id)) {
                trips = [...trips,trip];
            }
        }

        return (
            <div>
                <Navbar />
                <div id="trips">
                    {trips.map((trip, index) => (
                        <Trip key={trip.id} trip={trip} />
                    ))}
                </div>
            </div>
        );
    }
}

//Pull in the React Router context so router is available on this.context.router.
Trips.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        accounts: state.accounts,
        loggedin: state.loggedin,
        trips: state.trips
    };
}

export default connect(mapStateToProps)(Trips);

