import React from 'react'
import * as yup from 'yup'
import firebase from '../../services/firebase'

import { NavLink, Redirect } from 'react-router-dom'
import withForm from '../../hocs/formManager'
import { toast } from 'react-toastify'


class CreateOffer extends React.Component {

    brandOnChangeHandler = this.props.controlChangeHandlerFactory('brand');
    modelOnChangeHandler = this.props.controlChangeHandlerFactory('model');
    yearOnChangeHandler = this.props.controlChangeHandlerFactory('year');
    imageUrlOnChangeHandler = this.props.controlChangeHandlerFactory('imageUrl');
    mileageOnChangeHandler = this.props.controlChangeHandlerFactory('mileage');
    priceOnChangeHandler = this.props.controlChangeHandlerFactory('price');
    contactOnChangeHandler = this.props.controlChangeHandlerFactory('contact');



    submitHandler = () => {
        this.props.runValidations()
            .then(formData => firebase.createOffer(formData.brand, formData.model, formData.year, formData.imageUrl, formData.mileage, formData.price, formData.contact))
            .then((data) => {
                this.props.history.push('/')
                toast.success("Your offer is successfully created.")
            })
            .catch((error) => toast.warn("Something went wrong!"))
    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    }

    render() {
        const brandError = this.getFirstControlError('brand');
        const modelError = this.getFirstControlError('model');
        const yearError = this.getFirstControlError('year');
        const imageUrlError = this.getFirstControlError('imageUrl');
        const mileageError = this.getFirstControlError('mileage');
        const priceError = this.getFirstControlError('price');
        const contactError = this.getFirstControlError('contact');

        return (
            sessionStorage.getItem('authorized') ?
            <div className="form-wrapper">
                <h2>Create Offer</h2>
                <form>
                    <label htmlFor="Brand">
                        Brand
                        <input
                            type="text"
                            name="brand"
                            placeholder="enter brand"
                            onChange={this.brandOnChangeHandler}

                        />
                        {brandError && <div className="error">{brandError}</div>}
                    </label>
                    <label htmlFor="model">
                        Model
                        <input
                            type="text"
                            name="model"
                            placeholder="enter your car model"
                            onChange={this.modelOnChangeHandler}

                        />
                        {modelError && <div className="error">{modelError}</div>}
                    </label>
                    <label htmlFor="year">
                        Year
                        <input
                            type="number"
                            name="year"
                            placeholder="enter year of registration"
                            onChange={this.yearOnChangeHandler}

                        />
                        {yearError && <div className="error">{yearError}</div>}
                    </label>
                    <label htmlFor="imageUrl">
                        Image URL
                        <input
                            type="string"
                            name="imageUrl"
                            placeholder="enter image URL"
                            onChange={this.imageUrlOnChangeHandler}

                        />
                        {imageUrlError && <div className="error">{imageUrlError}</div>}
                    </label>
                    <label htmlFor="mileage">
                        Mileage
                        <input
                            type="number"
                            name="mileage"
                            placeholder="enter mileage"
                            onChange={this.mileageOnChangeHandler}

                        />
                        {mileageError && <div className="error">{mileageError}</div>}
                    </label>
                    <label htmlFor="price">
                        Price
                        <input
                            type="number"
                            name="price"
                            placeholder="enter a price"
                            onChange={this.priceOnChangeHandler}

                        />
                        {priceError && <div className="error">{priceError}</div>}
                    </label>
                    <label htmlFor="contact">
                        Contact
                        <input
                            type="string"
                            name="contact"
                            placeholder="enter a phone number"
                            onChange={this.contactOnChangeHandler}

                        />
                        {contactError && <div className="error">{contactError}</div>}
                    </label>
                    <button className="button" type="button" onClick={this.submitHandler}>CreateOffer</button>
                </form>
                <div className="paragraph">Go back to the home page <NavLink to="/" className="button">Cancel</NavLink></div>
            </div> : <Redirect to="/login" />
        )
    }
}

const initialFormState = {
    brand: '',
    model: '',
    year: '',
    imageUrl: '',
    mileage: '',
    price: '',
    contact: ''
}

const schema = yup.object().shape({
    brand: yup.string('Brand should be string')
        .required('Brand is required')
        .min(3, 'Brand should be at least 3 chars'),

    model: yup.string('Model should be string')
        .required('Model is required'),

    year: yup.number('Year of registration should be a number')
        .required('Year is required')
        .min(4, 'Password should be at least 4 digits'),

    imageUrl: yup.string('Image URL should be string')
        .required('Image URL is required'),

    mileage: yup.number('Mileage should be a number')
        .required('Year is required')
        .min(2, 'Mileage should be at least 2 digits'),

    price: yup.number('Price should be a number')
        .required('Price is required')
        .min(2, 'Password should be at least 2 digits'),

    contact: yup.string()
        .required('Contact is required')
        .min(2, 'Password should be at least 2 digits'),
})

export default withForm(CreateOffer, initialFormState, schema)