import React, { useState, useEffect } from 'react';
import './Offers.scss';
import Offer from './Offer/Offer';
import firebase from '../services/firebase';

const SORT_OPTIONS = {
    'PRICE_ASC': { column: 'price', direction: 'asc'},
    'PRICE_DESC': { column: 'price', direction: 'desc'},

    'BRAND_ASC': { column: 'brand', direction: 'asc'},
    'BRAND_DESC': { column: 'brand', direction: 'desc'},
}

function useOffers(sortBy = 'PRICE_ASC') {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        const unsubscribe = firebase.db.collection('offers')
        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newOffers = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setOffers(newOffers)
            })

            return () => unsubscribe()
    }, [sortBy])

    return offers
}

function Offers() {
    const [sortBy, setSortBy] = useState('PRICE_ASC')
    const offers = useOffers(sortBy)

    return <div>
        <div >
            <label>Sort By: </label>
            <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                <option value="BRAND_ASC">Brand (a-z)</option>
                <option value="BRAND_DESC">Brand (z-a)</option>
                <option value="PRICE_ASC">Price (lowest first)</option>
                <option value="PRICE_DESC">Price (highest first)</option>
            </select>
        </div>
        <ul className="offers-list">
            {offers.map((offer) =>
                <li key={offer.id}>
                        <Offer 
                        id={offer.id} 
                        model={offer.model} 
                        imageUrl={offer.imageUrl}
                        brand={offer.brand}
                        price={offer.price}
                        />
                </li>
            )}
        </ul>

    </div>
}

export default Offers;