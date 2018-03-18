import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/trips.css";

class Message extends Component {
    constructor(props) {
        super();
        this.str = props.msg.date.toLocaleString();
        switch (props.msg.type) {
            case "notification":
                this.str += ": " + props.msg.text;
                break;
            case "message":
                this.str += " " + props.msg.user + ": " + props.msg.text;
                break;
            case "todo":
                this.str += " Upcoming: " + props.msg.text;
                break;
            default:
                this.str += ": Error";
        }
    }

    componentWillReceiveProps(props) {
        this.str = props.msg.date.toLocaleString();
        switch (props.msg.type) {
            case "notification":
                this.str += ": " + props.msg.text;
                break;
            case "message":
                this.str += " " + props.msg.user + ": " + props.msg.text;
                break;
            case "todo":
                this.str += " Upcoming: " + props.msg.text;
                break;
            default:
                this.str += ": Error";
        }
    }

    render() {
        return <div className={this.props.msg.type}> {this.str} </div>;
    }
}

export default Message;
