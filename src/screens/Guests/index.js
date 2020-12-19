import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
//import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.personType}>Adults</Text>
            <Text style={styles.personAge}>Ages 13 or above</Text>
          </View>
          <View style={styles.ticketList}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.addRemove}>-</Text>
            </Pressable>

            <Text style={styles.person}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.addRemove}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.personType}>Children</Text>
            <Text style={styles.personAge}>Ages 2-12</Text>
          </View>
          <View style={styles.ticketList}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.addRemove}>-</Text>
            </Pressable>

            <Text style={styles.person}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.addRemove}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.personType}>Infants</Text>
            <Text style={styles.personAge}>Under 2</Text>
          </View>
          <View style={styles.ticketList}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.addRemove}>-</Text>
            </Pressable>

            <Text style={styles.person}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.addRemove}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={styles.searchContainer}>
        <Text style={styles.searchText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
