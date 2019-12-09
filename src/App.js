import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Offers from './Offers/Offers';
import CreateOffer from './Offers/CreateOffer/CreateOffer';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import Profile from './User/Profile';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="Container">
          <Main title="Hello">
            <Switch>
              <Route path="/" exact component={Offers}/>
              <Route path="/create-offer" component={CreateOffer}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </Main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
