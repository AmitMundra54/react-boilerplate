import React from 'react';
import {
    // BrowserRouter as Router,
    Link
} from 'react-router-dom';
import './header.css';

export const Header = () => {
    return (
        <div className="row">
            <ul className="col">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/services">SERVICES</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
        </div>
    )
};

// export default Header