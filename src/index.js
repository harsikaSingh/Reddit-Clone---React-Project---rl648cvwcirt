import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-vd78rl67lv0vvjsr.us.auth0.com"
    clientId="3cQ8PsybQpg6p2pamLwwh2DvKUNxgOoF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App /> 
  </Auth0Provider>,
)