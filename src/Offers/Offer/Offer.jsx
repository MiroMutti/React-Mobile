import React from 'react';
import {Link} from 'react-router-dom';
import '../Offers.scss';

function Offer({ imageUrl, imageAlt, children }) {

    return <article className='offer'>
        <div className='thumbnail'>
            <img src={imageUrl} alt={ imageAlt } />
        </div>
        <div className='offer-content'>
            <p className='offer-title'>{children}</p>
            <div className='details'>
                Published on ....
            </div>
            <div className='action-bar'>
                <ul>
                    <li><Link to='/' className="button">Details</Link></li>
                    <li><Link to='/' className="button">Delete</Link></li>
                </ul>
            </div>
        </div>
    </article>
}

export default Offer;