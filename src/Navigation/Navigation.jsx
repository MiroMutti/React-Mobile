import React from 'react';
import './Navigation.scss';
import Link from '../shared/Link/Link';

function Navigation() {
    return <nav className="Navigation">
        <ul>
        <Link to="/">All</Link>
        <Link to="/create-offer">Sell</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </ul>
    </nav>
}

export default Navigation;