import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom/';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';

// hooks the application onto the DOM
ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}>
    <Router>
      <App />
    </Router>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);
