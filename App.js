/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

import 'react-native-gesture-handler';

import SearchResultScreen from './src/screens/SearchResults';
import Router from './src/navigation/Router';
import HomeScreen from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Router />
    </>
  );
};

export default App;
