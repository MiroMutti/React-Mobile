import React from 'react';
import './Navigation.scss';
import Link from '../shared/Link/Link';

function Navigation() {
    return <nav className="Navigation">
        <ul>
        <Link url="#">All</Link>
        <Link url="#">Sell</Link>
        <Link url="#">My auctions</Link>
        </ul>
    </nav>
}

export default Navigation;