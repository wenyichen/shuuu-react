import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div id="bar">
            <div id="nav">
                <ul>
                    <li><Link to="/account">My Account</Link></li>
                    <li><Link to="/trips">My Trips</Link></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Navbar;
