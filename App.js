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

import SearchResultScreen from './src/screens/SearchResults';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}

        {/* <SearchResultScreen /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
};

export default App;
