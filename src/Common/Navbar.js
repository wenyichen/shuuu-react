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
                <div id="bar">
                    <Title display={this.props.title} />
                    <div id="nav">
                        {/* If logged in display My Account/MyTrips
                        else display Login/Signup */}
                        <ul>
                            <Link to="/account"><li><span>My Account</span></li></Link>
                            <Link to="/trips"><li><span>My Trips</span></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
  }
}

export default Navbar;
