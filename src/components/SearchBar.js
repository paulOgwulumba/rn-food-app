import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.styleOfIcon} />
      <TextInput style={styles.styleOfTextInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row',
      paddingVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
  },
  styleOfIcon: {
      fontSize: 25,
      marginRight: 5,
  },
  styleOfTextInput: {
      flex: 1,
      height: 35,
      padding: 10,
      fontSize: 18,
  }

});

export default SearchBar;
