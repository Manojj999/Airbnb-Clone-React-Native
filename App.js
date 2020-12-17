/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, ScrollView} from 'react-native';

//import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <ScrollView>
          <Post post={post1} />
          <Post post={post2} />
          <Post post={post3} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
