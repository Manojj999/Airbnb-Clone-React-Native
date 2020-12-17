import React, {useState} from 'react';
import {View, Pressable, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = (props) => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where Are You Going??"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            onPress={() => console.warn('press button')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
