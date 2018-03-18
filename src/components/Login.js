import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "../css/main.css";
import "../css/login.css";
import * as loginActions from "../actions/loginActions";
import Navbar from "../Common/Navbar";
import toastr from "toastr";

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            info: Object.assign({}, props.info),
            errors: {},
            saving: false,
            fail: false
        };

        this.change = this.change.bind(this);
        this.login = this.login.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    change(event) {
        const field = event.target.name;
        let info = Object.assign({}, this.state.info);
        info[field] = event.target.value;
        return this.setState({ info: info });
    }

    login(event) {
        event.preventDefault();

        this.setState({ saving: true });
        for (let account of this.props.accounts) {
            console.log(account);
            console.log(this.state.info);
            if (this.state.info.phone === account.phone && this.state.info.password === account.password) {
                this.props.actions.login(account.id);
                this.redirect();
                return;
            } 
        }
        console.log("Failed");
        this.setState({ fail: true });
        this.setState({ saving: false });
        return;
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success("Logged In");
        this.context.router.history.push("/");
    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="overlay" />
                <div className="middlebox" id="login-box">
                    <div id="middlebox-topbar">
                        <p>Sign In</p>
                    </div>
                    <form id="login-form">
                        <div className="text-input">
                            <label htmlFor="_tel">Phone Number</label>
                            <input
                                type="tel"
                                id="_tel"
                                name="phone"
                                value={this.state.info.phone || ''}
                                onChange={this.change}
                            />
                        </div>
                        <div className="text-input">
                            <label htmlFor="_pass">Password</label>
                            <input
                                type="password"
                                id="_pass"
                                name="password"
                                value={this.state.info.password}
                                onChange={this.change}
                            />
                        </div>
                        <div className="button" id="login-button" onClick={this.login}>
                            Sign In
                        </div>
                        {this.state.fail ? (<div style={{color:'red'}}>Login Failed, please try again</div>) : (<div></div>)}
                    </form>
                    <div id="signup">
                        <p>Need an account?</p>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

//Pull in the React Router context so router is available on this.context.router.
Login.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        accounts: state.accounts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
