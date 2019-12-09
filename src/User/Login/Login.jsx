import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';


export default function Login(){
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
                         required/>
                </label>
                <label htmlFor="password">
                    password
                        <input
                        type="password"
                        name="password"
                        placeholder="enter password"
                         required/>
                </label>
                <button className="button" type="submit">Log in</button>
            </form>
            <div className="paragraph">You don't have an account? <NavLink to="/register" className="button">Register</NavLink></div>
        </div>
    )
}
