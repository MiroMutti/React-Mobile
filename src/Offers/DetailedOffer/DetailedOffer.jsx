import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebase'
import Loading from '../../shared/Loading/Loading';


const DetailedOffer = ({ match }) => {
    const {
        params: { offerId },
    } = match;

    const [offer, setOffer] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchOffer = async () => {
            setLoading(true)

            firebase.db.collection('offers').doc(offerId)
                .get().then(function (doc) {
                    setOffer(doc.data())
                }).catch((error) => console.log(error))
            setLoading(false)
        }
        fetchOffer()
    }, [offerId])

    return (

        <article className='offer'>
            {loading && <Loading />}
            {offer && <div className="details-wrapper">
                <div className="left-side">
                    <img src={offer.imageUrl} alt="loading" />
                </div>
                <div className="right-side">
                    <h3>Brand: {offer.brand}</h3>
                    <h3>Model: {offer.model}</h3>
                    <p>Year of first registration: {offer.year}</p>
                    <p>Mileage: {offer.mileage}</p>
                    <p>Price: {offer.price} €</p>
                    <p>Contact: {offer.contact}</p>
                </div>
            </div>}
        </article>
    )
}

export default DetailedOffer;