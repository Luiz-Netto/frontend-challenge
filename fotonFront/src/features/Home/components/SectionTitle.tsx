import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SectionTitle = ({title, link}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.link}>{link}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
  },
  link: {
    fontSize: 18,
    alignSelf: 'flex-end',
    color: '#4ABDF1',
  },
});
