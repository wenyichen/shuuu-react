import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/main.css";
import "./css/trips.css";
import "../node_modules/open-iconic/font/css/open-iconic-bootstrap.css";
import Navbar from "./Common/Navbar";
import Trip from "./Trip";

class Trips extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="trips">
                    {this.props.trips.map((trip, index) => <Trip key={index} trip={trip}/>)}
                </div>
            </div>
        );
    }
}

Trips.defaultProps = {
    trips: [
        {
            date: new Date().toDateString(),
            depart: "LONG_ADDRESS1",
            dest: "LONG_ADDRESS2",
            status: "Ready",
            driver: "DRIVER_NAME1",
            chats: [
                {
                    date: new Date(),
                    type: "notification",
                    text: "Trip has been created!"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "You have been added to the trip (Driver)"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "James has requested to join the trip"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "You have approved James's request"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "James have been added to the trip"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "Sam has requested to join the trip"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "You have approved Sam's request"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "Sam have been added to the trip"
                },
                {
                    date: new Date(),
                    type: "message",
                    text: "Hi!",
                    user: "You"
                },
                {
                    date: new Date(),
                    type: "message",
                    text: "Hello!",
                    user: "James"
                },
                {
                    date: new Date(),
                    type: "todo",
                    text: "Trip is scheduled for 1/19/19."
                }
            ]
        },
        {
            date: new Date().toDateString(),
            depart: "LONG_ADDRESS1",
            dest: "LONG_ADDRESS2",
            status: "Ready",
            driver: "DRIVER_NAME1",
            chats: [
                {
                    date: new Date(),
                    type: "notification",
                    text: "Trip has been created!"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "You have been added to the trip (Driver)"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "James has requested to join the trip"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "You have approved James's request"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "James have been added to the trip"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "Sam has requested to join the trip"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "You have approved Sam's request"
                },
                {
                    date: new Date(),
                    type: "notification",
                    text: "Sam have been added to the trip"
                },
                {
                    date: new Date(),
                    type: "message",
                    text: "Hi!",
                    user: "You"
                },
                {
                    date: new Date(),
                    type: "message",
                    text: "Hello!",
                    user: "James"
                },
                {
                    date: new Date(),
                    type: "todo",
                    text: "Trip is scheduled for 1/19/19."
                }
            ]
        }
    ]
};

export default Trips;
