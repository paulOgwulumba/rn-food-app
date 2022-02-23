import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../components/SearchBar/index';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <View style = { styles.container }>
      <SearchBar 
        searchInput = { searchInput }
        onChangeInput= { setSearchInput }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default SearchScreen;
