import React from 'react';
import * as yup from 'yup';

import { NavLink } from 'react-router-dom';
import withForm from '../../hocs/formManager';


class Register extends React.Component {

    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    emailOnChangeHandler = this.props.controlChangeHandlerFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

    submitHandler = () => {
        this.props.runValidations()
            .then(formData => console.log(formData))
    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    }

    render() {
        const usernameError = this.getFirstControlError('username');
        const emailError = this.getFirstControlError('email');
        const passwordError = this.getFirstControlError('password');
        const rePasswordError = this.getFirstControlError('rePassword');

        return (
            <div className="form-wrapper">
                <h2>Login</h2>
                <form >
                    <label htmlFor="Username">
                        Username
                        <input
                            type="text"
                            name="username"
                            placeholder="enter username"
                            onChange={this.usernameOnChangeHandler}

                        />
                        {usernameError && <div className="error">{usernameError}</div>}
                    </label>
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
                    <label htmlFor="rePassword">
                        Repeat Password
                        <input
                            type="password"
                            name="rePassword"
                            placeholder="Repeat your password"
                            onChange={this.rePasswordOnChangeHandler}

                        />
                        {rePasswordError && <div className="error">{rePasswordError}</div>}
                    </label>
                    <button className="button" type="button" onClick={this.submitHandler}>Register</button>
                </form>
                <div className="paragraph">You already have an account? <NavLink to="/login" className="button">Login</NavLink></div>
            </div>
        )
    }
}

const initialFormState = {
    username: '',
    password: '',
    rePassword: ''
}

const schema = yup.object({
    username: yup.string('Username should be string')
        .required('Username is required')
        .min(4, 'Username should be at least 4 chars'),

    email: yup.string('E-mail should be string')
        .required('E-mail is required')
        .email(),

    password: yup.string('Password should be string')
        .required('Password is required')
        .min(6, 'Password should be at least 6 chars'),

    rePassword: yup.string('Password should be string')
        .oneOf([yup.ref('password'), null], 'Passwords don\'t match')
        .required('Password is required')
        .min(6, 'Password should be at least 6 chars')

})

export default withForm(Register, initialFormState, schema)