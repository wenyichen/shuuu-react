import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/main.css";
import "./css/trips.css";
import Message from "./Message";

class Trip extends Component {
    constructor(props) {
        super();
        this.toggleShow = this.toggleShow.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.date = props.trip.date;
        this.dest = props.trip.dest;
        this.depart = props.trip.depart;
        this.status = props.trip.status;
        this.driver = props.trip.driver;
        this.state = {
            show: false,
            messages: props.trip.chats,
            chatinput: ""
        };
    }

    key() {
        return this.date + this.dest + this.depart + this.status + this.driver;
    }

    toggleShow() {
        const s = this.state.show;
        this.setState({ show: !s });
    }

    addMessage() {
        if (this.state.chatinput === "") {
            return;
        }

        var input = this.state.chatinput;

        var msg = {
            date: new Date(),
            type: "message",
            text: input,
            user: "ExampleUser"
        };
        var chats = this.state.messages;
        var ind = -1;
        for (var i = 0; i < chats.length; i++) {
            if (chats[i].type === "todo") {
                ind = i;
                break;
            }
        }
        if (ind !== -1) {
            chats.splice(ind, 0, msg);
        } else {
            chats.append(msg);
        }

        this.setState({
            chatinput: ""
        });
    }

    updateInputValue(event) {
        this.setState({
            chatinput: event.target.value
        });
    }

    render() {
        var hidden = {
            display: "none"
        };
        var visible = {
            display: "block"
        };

        return (
            <div className="trip" key={this.key()}>
                <div className="info">
                    <div className="date">{this.date}</div>
                    <div className="depart">{this.depart}</div>
                    <div
                        className="chevron oi oi-chevron-right"
                        title=">"
                        aria-hidden="true"
                    />
                    <div className="dest">{this.dest}</div>
                    <div className="status">Status: {this.status}</div>
                    <div className="driver">Driver: {this.driver}</div>
                    <div className="buttons">
                        <div className="button show" onClick={this.toggleShow}>
                            {this.state.show ? "Show Less" : "Show More"}
                        </div>
                    </div>
                </div>
                <div
                    className="chat"
                    style={this.state.show ? visible : hidden}
                >
                    {this.state.messages.map((chat, index) => (
                        <Message msg={chat} key={index} />
                    ))}
                </div>
                <div className="chatbar">
                    <input
                        className="chatinput"
                        name="content"
                        value={this.state.chatinput}
                        onChange={evt => this.updateInputValue(evt)}
                        type="text"
                    />
                    <div className="button" onClick={this.addMessage}>
                        Leave a Note
                    </div>
                </div>
            </div>
        );
    }
}

export default Trip;
