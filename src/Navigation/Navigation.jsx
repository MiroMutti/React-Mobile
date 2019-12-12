import React from 'react';
import './Navigation.scss';
import Link from '../shared/Link/Link';
import logo from '../logo.svg'

function Navigation() {
    return <header className="site-header">
    <div className="site-brand">
        <img src={logo} alt='logo' />
        <p className="site-title">Mobile M</p>
    </div>
    <nav className="navigation">
        <ul>
            <Link to="/">All</Link>
            <Link to="/create-offer">Sell</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </ul>
    </nav>
</header>
}

export default Navigation;

