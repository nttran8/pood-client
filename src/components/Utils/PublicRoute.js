// Library
import React from "react";
import { Route, Redirect } from "react-router-dom";

// Service
import TokenService from "../../services/token-service";

export default function PublicRoute({ component, ...props }) {
  // If user with token attempt to access public only route, then reroute to dashboard
  const Component = component;
  return (
    <Route
      {...props}
      render={componentProps =>
        TokenService.hasAuthToken() ? (
          <Redirect to={"/dashboard"} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}
