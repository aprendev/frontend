import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocationTracker } from './hooks/useLocationTracker';
import { Home } from './pages/Home';
import { Memberlist } from './pages/MemberList';
import { Presentation } from './pages/Presentation';

export function AppRouter() {
  // Metrics:
  useLocationTracker();

  return (
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
  );
}
