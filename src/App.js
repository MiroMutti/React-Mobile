import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import firebase from 'firebase/app'
import './App.scss'

import Loading from './shared/Loading/Loading'
import NotFound from './NotFound/NotFound'
import Navigation from './Navigation/Navigation'
import Offers from './Offers/Offers'
import CreateOffer from './Offers/CreateOffer/CreateOffer'
import Login from './User/Login/Login'
import Register from './User/Register/Register'
import Logout from './User/Logout/Logout'
import Profile from './User/Profile'
import { ToastContainer } from 'react-toastify'








class App extends React.Component {
  constructor(){
    super()
    this.state = {
      authenticated: false,
      loading: true
    }
  }

  UNSAFE_componentWillMount(){
    this.removeAuthListener = firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          authenticated: true,
          loading: false
        })
      } else {
        this.setState({
          authenticated:false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount(){
    this.removeAuthListener()
  }

  render() {
    if(this.state.loading === true){
      return <Loading />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <ToastContainer />
          <Navigation authenticated={this.state.authenticated}/>
          <div className="Container">
              <Switch>
                <Route path="/" exact component={Offers}/>
                <Route path="/create-offer" component={CreateOffer}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/register" component={Register}/>
                <Route path="*" component={NotFound}/>
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
