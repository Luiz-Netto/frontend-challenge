import React from 'react';
import {useState} from 'react';
import {TextInput} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.searchContainer}>
      <EvilIcons
        name="search"
        size={25}
        color="#F0F0F0"
        style={styles.searchIcon}
      />
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search Book"
        placeholderTextColor="#54565A"
        style={styles.searchInput}
        autoCorrect={false}
        autoCapitalize="none"
        maxLength={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    maxHeight: 50,
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {marginLeft: 12, marginRight: 8},
  searchInput: {flex: 1},
});
