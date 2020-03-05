import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminRoute } from './components/AdminRoute';
import { AuthRoute } from './components/AuthRoute';
import { useLocationTracker } from './hooks/useLocationTracker';
import { Admin } from './pages/Admin';
import { Challenges } from './pages/Challenges';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Memberlist } from './pages/MemberList';

export function AppRouter() {
  // Metrics:
  useLocationTracker();

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <AuthRoute exact path="/home" component={() => <Home />} />
      <AuthRoute exact path="/challenges" component={() => <Challenges />} />
      <AuthRoute exact path="/memberlist" component={() => <Memberlist />} />
      <AdminRoute exact path="/admin" component={() => <Admin />} />
    </Switch>
  );
            
}
