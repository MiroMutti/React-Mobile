import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';
import Offers from './Offers/Offers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="Container">
          <Main title="Hello">
            <Switch>
              <Route path="/offers" component={Offers}/>
            </Switch>
          </Main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
