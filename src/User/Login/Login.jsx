import React from 'react';
import * as yup from 'yup';
import firebase from '../../services/firebase'

import { NavLink } from 'react-router-dom';
import withForm from '../../hocs/formManager';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Login extends React.Component {


    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');

    submitHandler = () => {
        this.props.runValidations()
            .then(formData => firebase.login(formData.email, formData.password)) //firebase.register(formData.email, formData.password, formData.username)
            .then(() => {
                this.props.history.push('/')
                toast.success("Logged in success.")
            })
            .catch((error) => toast.warn("Invalid Username or Password!"))
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
                <h2>Login</h2>
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
                     {emailError && <div className="error">{emailError}</div>}
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

export default withForm(Login, initialFormState, schema)