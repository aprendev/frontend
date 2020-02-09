import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminRoute } from './components/AdminRoute';
import { AuthRoute } from './components/AuthRoute';
import { useLocationTracker } from './hooks/useLocationTracker';
import { Admin } from './pages/Admin';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Memberlist } from './pages/MemberList';
import { Presentation } from './pages/Presentation';
import { Trap } from './pages/Trap';

export function AppRouter() {
  // Metrics:
  useLocationTracker();

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <AuthRoute exact path="/home" component={() => <Presentation />} />
      <AuthRoute exact path="/challenges" component={() => <Home />} />
      <AuthRoute exact path="/memberlist" component={() => <Memberlist />} />
      <AdminRoute exact path="/admin" component={() => <Admin />} />
      <AuthRoute exact path="/admin.php" component={() => <Trap />} />
    </Switch>
  );
}
