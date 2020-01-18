import React from 'react';
// import { Container } from 'react-bootstrap';
import { NavBar } from './components/NavBar';
import { Home } from './components/pages/Home';
import { Memberlist } from './components/pages/Memberlist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/challenges">
            <Home />
          </Route>
          <Route exact path="/">
            <Memberlist />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
