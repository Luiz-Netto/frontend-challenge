import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export const HomeScreen = () => {
  const [search, setSearch] = useState('');
  console.log(search);
  return (
    <SafeAreaView style={styles.screenContainer}>
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
        />
      </View>
      <Text style={styles.text}>
        Hi, <Text style={styles.textName}>Mehmed Al Fatih</Text> 👋
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  searchContainer: {
    height: 48,
    width: '80%',
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {marginLeft: 12, marginRight: 8},
  searchInput: {},
  text: {textAlign: 'center', color: '#000000'},
  textName: {textAlign: 'center', color: '#AA0000'},
});
