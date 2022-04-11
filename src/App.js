import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/index';
import store from './store';

const App = () => {
  return (
   <Provider store={store}>
      <MainNavigator />
   </Provider>
  );
};


export default App;
