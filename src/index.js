import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 use from 'react-dom/client'
import './i18n';
import axios from 'axios';
import i18next from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import App from './Page/App/App';
import * as serviceWorker from './serviceWorker';

// Set language
const lang = localStorage.getItem('lang') || 'fr';
axios.defaults.headers.common['Accept-Language'] = lang;
i18next.changeLanguage(lang);

// Create root and render the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // 👈 new React 18 API

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Optional: service worker
serviceWorker.unregister();
