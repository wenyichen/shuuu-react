import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Title extends Component {
    
    render() {
        let ret = '';
        if (this.props.display === undefined || this.props.display) {
            ret = (
            <div id="title">
                <h1><Link to="/">shuuu</Link></h1>
            </div>
            );
        }
        return ret;
    }
}

class Navbar extends Component {

    render() {
        return (
            <div>
                <Title display={this.props.title} />
                <div id="bar">
                    <div id="nav">
                        <ul>
                            <li><Link to="/account">My Account</Link></li>
                            <li><Link to="/trips">My Trips</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
  }
}

export default Navbar;
