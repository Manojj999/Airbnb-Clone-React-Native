import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  personType: {fontWeight: 'bold'},
  personAge: {
    color: '#8d8d8d',
  },
  ticketList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addRemove: {
    fontSize: 20,
    color: '#474747',
  },
  person: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  searchContainer: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default styles;
