import React, { Component } from "react";
import "../css/main.css";
import "../css/search.css";
import "../../node_modules/open-iconic/font/css/open-iconic-bootstrap.css";
import Navbar from "../Common/Navbar";
import Result from "./Result";

class Search extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="bar2">
                    <div id="subheader">
                        <h4>Search Results</h4>
                    </div>
                </div>
                <div id="results">
                    {this.props.data.map((result, index) => (
                        <Result key={index} result={result} />
                    ))}
                </div>
            </div>
        );
    }
}

Search.defaultProps = {
    data: [
        {
            date: "1/1/19",
            depart: "LONG_ADDRESS1",
            dest: "LONG_ADDRESS2",
            price: 25,
            seats: 4,
            seatsleft: 1,
            driver: "DRIVER_NAME1"
        },
        {
            date: "2/2/19",
            depart: "LONG_ADDRESS3",
            dest: "LONG_ADDRESS4",
            price: 70,
            seats: 7,
            seatsleft: 4,
            driver: "DRIVER_NAME2"
        }
    ]
};

export default Search;
