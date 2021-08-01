import React from 'react';
import {StyleSheet, Text, TextProps, View} from 'react-native';

interface ISectionTitle extends TextProps {
  title: string;
  link: string;
}

export const SectionTitle = (props: ISectionTitle) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.link}>{props.link}</Text>
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
