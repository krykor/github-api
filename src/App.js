import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';

import { User } from './components/User';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
