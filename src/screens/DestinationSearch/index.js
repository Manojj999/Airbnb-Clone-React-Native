import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';
import SuggetionRow from './SuggetionRow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const PLACE_API_KEY = "AIzaSyDa-_B3CLlOHWG33nQMeuMjLu0pO3PdHzo";
const DestinationSearch = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          // key: 'AIzaSyCuyNNQbJcq2x9nH6xNVORus9fUp69OKJo',
          key: PLACE_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggetionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
