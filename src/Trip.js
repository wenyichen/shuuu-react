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
        this.state = {
            //alert: 0,
            show: false,
            messages: props.trip.chats,
            chatinput: ""
        };
    }

    toggleShow() {
        const s = this.state.show;
        this.setState(
            //alert: 0,
            { show: !s }
        );
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
            //alert: alert + 1,
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
            <div className="trip" >
                <div className="info">
                    <div className="date">{this.props.trip.date}</div>
                    <div className="depart">{this.props.trip.depart}</div>
                    <div
                        className="chevron oi oi-chevron-right"
                        title=">"
                        aria-hidden="true"
                    />
                    <div className="dest">{this.props.trip.dest}</div>
                    <div className="status">Status: {this.props.trip.status}</div>
                    <div className="driver">Driver: {this.props.trip.driver}</div>
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
