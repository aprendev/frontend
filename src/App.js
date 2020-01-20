import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/pages/Home';
import { Memberlist } from './components/pages/MemberList';
import { Presentation } from './components/pages/Presentation';

export function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Presentation />
          </Route>
          <Route exact path="/Challenges">
            <Home />
          </Route>
          <Route exact path="/memberlist">
            <Memberlist />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
