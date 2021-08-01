import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BookShowcase, SearchBar} from '../components';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar />
      <Text style={styles.text}>
        Hi, <Text style={styles.textName}>Mehmed Al Fatih</Text> 👋
      </Text>
      <BookShowcase />
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
  text: {textAlign: 'center', color: '#000000'},
  textName: {textAlign: 'center', color: '#AA0000'},
});
