import React from 'react';
import avatar from '../avatar.png';
import './Profile.css'

class Profile extends React.Component{
  render(){
      return (
        <div className="card" style={{margin:"auto"}}>
        <img src={avatar} alt="John" style={{width:"100%"}}/>
        <p className="title">{this.props.email}</p>
        <p><button className="button">Contact</button></p>
      </div>
      )
  }
}

export default Profile