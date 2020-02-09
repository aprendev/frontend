import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

export const AuthRoute = ({ component: Component, ...rest }) => {
  const [isAutorizedUser, setIsAutorizedUser] = useState(true);

  useEffect(() => {
    async function validateAuth() {
      const response = await isAuthenticated();
      setIsAutorizedUser(response);
    }
    validateAuth();
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        isAutorizedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location, error: 'Erro' }
            }}
          />
        )
      }
    />
  );
};
