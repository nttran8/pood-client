// Library
import React from "react";
import { Route, Redirect } from "react-router-dom";

// Service
import TokenService from "../../services/token-service";

export default function PrivateRoute({ component, ...props }) {
  // If user with no token attempt to access private page, then reroute to homepage
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: componentProps.location }
            }}
          />
        )
      }
    />
  );
}
