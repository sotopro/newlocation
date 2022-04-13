import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import MainNavigator from './navigation/index';
import store from './store';
import {init} from './db';

init()
  .then(() => {
    console.log('DB initialized');
  })
  .catch(err => {
    console.log('DB initialization failed', err);
  });

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
