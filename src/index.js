import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-vd78rl67lv0vvjsr.us.auth0.com"
    clientId="HUbVcsBEpER3JsmGUFvV1H2bRdiGYjsj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App /> 
  </Auth0Provider>,
)
