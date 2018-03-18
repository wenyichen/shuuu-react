import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../css/main.css";
import "../css/account.css";
import Navbar from "../Common/Navbar";
import { Link } from "react-router-dom";

class Account extends Component {
    render() {

        var id = this.props.loggedin.uid;
        console.log(id);
        var name = "";
        var phone = "";
        for (var account of this.props.accounts) {
            console.log(account)
            if (account.id == id) {
                name = account.name;
                phone = account.phone;
            }
        }

        return (

       
            <div> 
            {console.log(name) }
                <Navbar />
                <div id="overlay" />
                <div className="middlebox" id="acc-box">
                    <div id="middlebox-topbar">
                        <p>My Account:</p>
                    </div>
                    <form id="acc-form">
                        <div id="name-display">
                            <label htmlFor="_name">Name</label>
                            <p id="_name" name="name">
                                {name}
                            </p>
                        </div>
                        <div id="tel-display">
                            <label htmlFor="_tel">Phone Number</label>
                            <p id="_tel" name="tel">
                                {phone}
                            </p>
                        </div>
                        <Link to="/account/edit">
                            <div className="button" id="edit-button">
                                Edit
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        accounts: state.accounts,
        loggedin: state.loggedin
    };
}

export default connect(mapStateToProps)(Account);