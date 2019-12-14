import React from 'react';
import { Link } from 'react-router-dom';
import '../Offers.scss';

function Offer({ id, imageUrl, model, brand, price }) {

    return (
        <div className="card">
            <div className="card-content">
                <img src={imageUrl} alt="loading" className="card-image"/>
                <h4 className="card-name">{brand} - {model}</h4>
                <h5 className="card-price">{price} €</h5>
            </div>
            <div className="card-actions">
                <Link to={`/offer/${id}`} className="button">Details</Link>
            </div>
        </div>
    )
}

export default Offer;
