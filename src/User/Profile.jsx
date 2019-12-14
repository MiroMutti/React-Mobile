import React from 'react'
import { Redirect } from 'react-router-dom'
import avatar from '../avatar.png'
import './Profile.css'

class Profile extends React.Component{
  render(){
      return (
        sessionStorage.getItem('authorized') ?
        <div className="card" style={{margin:"auto"}}>
        <img src={avatar} alt="John" style={{width:"100%"}}/>
        <p className="title">{this.props.email}</p>
        <p><button className="button">Contact</button></p>
      </div> : <Redirect to="/login" />
      )
  }
}

export default Profile