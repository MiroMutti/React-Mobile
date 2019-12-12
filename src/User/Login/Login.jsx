import React from 'react';
import * as yup from 'yup';
import firebase from '../../services/firebase'

import { NavLink } from 'react-router-dom';
import withForm from '../../hocs/formManager';


class Register extends React.Component {


    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        this.props.runValidations()
            .then(formData => firebase.login(formData.email, formData.password)) //firebase.register(formData.email, formData.password, formData.username)
            .catch((error) => error.message)
    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    }

    render() {
        const emailError = this.getFirstControlError('email');
        const passwordError = this.getFirstControlError('password');

        return (
            <div className="form-wrapper">
                <h2>Register</h2>
                <form >
                    <label htmlFor="email">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            onChange={this.emailOnChangeHandler}

                        />
                        {emailError && <div className="error">{emailError}</div>}
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            onChange={this.passwordOnChangeHandler}

                        />
                        {passwordError && <div className="error">{passwordError}</div>}
                    </label>

                    <button className="button" type="button" onClick={this.submitHandler}>Login</button>
                </form>
                <div className="paragraph">You don't have an account? <NavLink to="/register" className="button">Register</NavLink></div>            </div>
        )
    }
}

const initialFormState = {
    username: '',
    password: '',
}

const schema = yup.object().shape({

    email: yup.string('E-mail should be string')
        .required('E-mail is required'),

    password: yup.string('Password should be string')
        .required('Password is required')
        .min(6, 'Password should be at least 6 chars'),
})

export default withForm(Register, initialFormState, schema)