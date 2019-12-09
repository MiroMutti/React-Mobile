import React from 'react';
import { NavLink } from 'react-router-dom';
import withForm from '../../hocs/formManager';


class Register extends React.Component(){

    render(){
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
                            minlength='5'
                            
                            />
                    </label>
                    <label htmlFor="email">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="enter password"
                            minlength='6'
                            />
                    </label>
                    <button className="button" type="submit">Register</button>
                </form>
                <div className="paragraph">You already have an account? <NavLink to="/login" className="button">Login</NavLink></div>
            </div>
        )
    }
}

export default withForm(Register)