import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";

class Title extends Component {
    render() {
        let ret = "";
        if (this.props.display === undefined || this.props.display) {
            ret = (
                <div id="title">
                    <h1>
                        <Link to="/">shuuu</Link>
                    </h1>
                </div>
            );
        }
        return ret;
    }
}

class Navbar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (!this.props.loggedin && this.context.router.history.location.pathname != '/' && this.context.router.history.location.pathname != '/login' && this.context.router.history.location.pathname != '/signup' ) {
            this.context.router.history.push('/');
        }

        return (
            <div>
                <div id="bar">
                    <Title display={this.props.title} />
                    <div id="nav">
                        {/* If logged in display My Account/MyTrips
                        else display Login/Signup */}
                        <ul>
                            {this.props.loggedin ? (
                                <Fragment>
                                    <Link to="/account">
                                        <li>
                                            <span>My Account</span>
                                        </li>
                                    </Link>
                                    <Link to="/trips">
                                        <li>
                                            <span>My Trips</span>
                                        </li>
                                    </Link>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link to="/signup">
                                        <li>
                                            <span>Sign Up</span>
                                        </li>
                                    </Link>
                                    <Link to="/login">
                                        <li>
                                            <span>Login</span>
                                        </li>
                                    </Link>
                                </Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

//Pull in the React Router context so router is available on this.context.router.
Navbar.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        loggedin: state.loggedin.loggedin
    };
}

export default connect(mapStateToProps)(Navbar);
