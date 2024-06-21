// App.js or App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store'; // Adjust the path as necessary
import AllRoute from '../router'; // Adjust the path as necessary

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <AllRoute />
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
