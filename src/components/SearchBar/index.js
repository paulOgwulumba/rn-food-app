import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { searchComponentStyle } from './style' ;

const SearchBar = ({ searchInput, onChangeInput }) => {
  return (
    <View style={ searchComponentStyle.background }>
      <Feather 
        name = 'search' 
        style = { searchComponentStyle.searchIcon } 
        size = { 32 }
      />

      <TextInput 
        style = { searchComponentStyle.textInput } 
        placeholder = "Search" 
        value = { searchInput }
        onChangeText = { onChangeInput }
        onEndEditing= { () => {console.log('editing started')}}
      />
    </View>
  );
}

export { SearchBar };
