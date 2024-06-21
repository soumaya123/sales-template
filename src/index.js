import React from 'react';
import ReactDOM from 'react-dom';
import App from './Page/App/App';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
