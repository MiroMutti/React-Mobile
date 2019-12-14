import React, { useState, useEffect } from 'react'
import firebase from '../../services/firebase'
import Loading from '../../shared/Loading/Loading'
import { Redirect } from 'react-router-dom'


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
        sessionStorage.getItem('authorized') ?
        <article className='offer'>
            {loading && <Loading />}
            {offer && <div className="details-wrapper">
                <div className="left-side">
                    <img src={offer.imageUrl} alt="loading" style={{width:"60%", boxShadow:"0px 0px 16px 1px rgba(0,0,0,0.75)"}}/>
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
        </article> : <Redirect to="/login"/>
    )
}

export default DetailedOffer