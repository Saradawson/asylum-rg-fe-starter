import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistoty = ({ children }) => {
  const history = useHistory();
  const domain = process.env.sample.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.sample.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistoty;
