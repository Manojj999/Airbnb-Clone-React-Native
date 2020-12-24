import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/SearchResults';
import SearchResultMap from '../screens/SearchResultMap.js';


const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResultScreen} />

      <Tab.Screen name={'map'} component={SearchResultMap} />
    </Tab.Navigator>
  );
};

export default SearchResultTabNavigator;
