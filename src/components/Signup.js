import React, { Component } from "react";
import {PropTypes} from "prop-types"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../css/main.css";
import "../css/signup.css";
import Navbar from "../Common/Navbar";
import * as accountActions from "../actions/accountActions";
import toastr from "toastr";

class Signup extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            account: Object.assign({}, props.account),
            errors: {},
            saving: false
        };

        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    change(event) {
        const field = event.target.name;
        let account = Object.assign({}, this.state.account);
        account[field] = event.target.value;
        return this.setState({ account: account });
    }

    save(event) {
        event.preventDefault();

        this.setState({ saving: true });

        this.props.actions
            .saveAccount(this.state.account)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
            });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success("Account saved");
        console.log(this.context);
        this.context.router.history.push("/");
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay" />
                <div className="middlebox" id="signup-box">
                    <div id="middlebox-topbar">
                        <p>Sign Up</p>
                    </div>
                    <form id="signup-form">
                        <div className="text-input">
                            <label htmlFor="_name">Name</label>
                            <input
                                type="text"
                                id="_name"
                                name="name"
                                value={this.state.account.name}
                                onChange={this.change}
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_tel">Phone Number</label>
                            <input
                                type="tel"
                                id="_tel"
                                name="phone"
                                value={this.state.account.phone}
                                onChange={this.change}
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_pass">Password</label>
                            <input
                                type="password"
                                id="_pass"
                                name="password"
                                value={this.state.account.password}
                                onChange={this.change}
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_confirmpass">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="_confirmpass"
                                name="confirmpass"
                                value={this.state.account.confirm}
                                onChange={this.change}
                            />
                        </div>
                        <div
                            className="button"
                            type="submit"
                            id="signup-button"
                            onClick={this.save}
                        >
                            Sign Up
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
//Pull in the React Router context so router is available on this.context.router.
Signup.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        accounts: state.accounts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(accountActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
