import React, { Fragment } from 'react';
import './Navigation.scss';
import Link from '../shared/Link/Link';
import logo from '../logo.svg'

class Navigation extends React.Component {
    render() {
        return (
            <header className="site-header">
                <div className="site-brand">
                    <img src={logo} alt='logo' />
                    <p className="site-title">Mobile M</p>
                </div>
                <nav className="navigation">
                    <ul>
                        <Link to="/">All</Link>
                        {this.props.authenticated
                            ? (<Fragment>
                                <Link to="/create-offer">Sell</Link>
                                <Link to="/profile">Profile</Link>
                                <Link to="/logout">Logout</Link>
                            </Fragment>)
                            : <Fragment>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </Fragment>
                        }
                    </ul>
                </nav>
            </header>
        )

    }
}

export default Navigation;

