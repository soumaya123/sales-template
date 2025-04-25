import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store'; // Adjust if needed
import AllRoute from '../router'; // Adjust if needed

const App = () => {
  return (
    <Provider store={store}>
        <AllRoute />
    </Provider>
  );
};

export default App;
