import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/main.css";
import "./css/trips.css";

class Message extends Component {
    constructor(props) {
        super();
        this.type = props.msg.type;
        this.time = props.msg.date;
        this.user = props.msg.user;
        this.text = props.msg.text;
        this.str = this.time.toLocaleString();
        switch (this.type) {
            case "notification":
                this.str += ": " + this.text;
                break;
            case "message":
                this.str += " " + this.user + ": " + this.text;
                break;
            case "todo":
                this.str += " Upcoming: " + this.text;
                break;
            default:
                this.str += ": Error";
        }
    }

    componentWillReceiveProps (props) {
        this.type = props.msg.type;
        this.time = props.msg.date;
        this.user = props.msg.user;
        this.text = props.msg.text;
        this.str = this.time.toLocaleString();
        switch (this.type) {
            case "notification":
                this.str += ": " + this.text;
                break;
            case "message":
                this.str += " " + this.user + ": " + this.text;
                break;
            case "todo":
                this.str += " Upcoming: " + this.text;
                break;
            default:
                this.str += ": Error";
        }
    }

    render() {
        return <div className={this.type}> {this.str} </div>;
    }
}

export default Message;
