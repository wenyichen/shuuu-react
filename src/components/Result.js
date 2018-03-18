import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/search.css";

class Result extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="result">
                <div className="date">{this.props.result.date}</div>
                <div className="depart">{this.props.result.depart}</div>
                <div
                    className="chevron oi oi-chevron-right"
                    title=">"
                    aria-hidden="true"
                />
                <div className="dest">{this.props.result.dest}</div>
                <div className="price">Price: {this.props.result.price}</div>
                <div className="seats">Seats: {this.props.result.seats}</div>
                <div className="seatsleft">Seats Left: {this.props.result.seatsleft}</div>
                <div className="driver">Driver: {this.props.result.driver}</div>
            </div>
        );
    }
}

export default Result;
