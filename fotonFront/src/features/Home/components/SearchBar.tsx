import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const SearchBar = (props: TextInputProps) => {
  return (
    <View style={styles.searchContainer}>
      <EvilIcons
        name="search"
        size={25}
        color="#F0F0F0"
        style={styles.searchIcon}
      />
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder="Search Book"
        placeholderTextColor="#54565A"
        autoCorrect={false}
        autoCapitalize="none"
        maxLength={25}
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    marginTop: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {marginLeft: 12, marginRight: 8},
  searchInput: {flex: 1},
});
