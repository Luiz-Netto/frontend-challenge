import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BookShowcase, SearchBar, SectionTitle} from '../components';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar />
      <View style={styles.greetings}>
        <Text style={styles.greetingsText}>
          Hi, <Text style={styles.greetingsTextName}>Mehmed Al Fatih</Text> 👋
        </Text>
      </View>
      <SectionTitle title="Discover New Book" link="More" />
      <BookShowcase />
      <SectionTitle title="Currently Reading" link="All" />
      <SectionTitle title="Reviews of The Days" link="All video" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFCF9',
  },
  greetings: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  greetingsText: {textAlign: 'center', color: '#000000', fontSize: 24},
  greetingsTextName: {textAlign: 'center', color: '#F65066', fontSize: 24},
});
