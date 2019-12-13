import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Loading from '../../shared/Loading/Loading'
import firebase from 'firebase/app'
import { toast } from 'react-toastify'

class Logout extends Component {
    constructor(){
        super()
        this.state = {
            redirect: false
        }
    }

    UNSAFE_componentWillMount(){
        firebase.auth().signOut().then((user) => {
            this.setState({redirect: true})
        }).then(toast.info("Logged out."))
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/login" />
        }
        return (
            <Loading />
        )
    }
}

export default Logout