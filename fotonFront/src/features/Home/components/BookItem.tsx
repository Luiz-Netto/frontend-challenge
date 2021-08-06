import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const originals = require('../assets/Originals.png');

export const BookItem = ({props, goToDetails}) => {
  return (
    <Pressable onPress={() => goToDetails(props)}>
      <View style={styles.container}>
        <Image style={styles.cover} source={originals} />
        <Text style={styles.title}>{props.volumeInfo.title}</Text>
        {props.volumeInfo.authors ? (
          props.volumeInfo.authors.length > 1 ? (
            <Text style={styles.author}>{props.volumeInfo.authors[0]}</Text>
          ) : (
            <Text style={styles.author}>{props.volumeInfo.authors}</Text>
          )
        ) : (
          <></>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 220,
    maxWidth: 105,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
    marginVertical: 20,
    marginHorizontal: 8,
  },
  cover: {height: 150, width: 100},
  title: {color: '#313131', fontSize: 12, marginTop: 10},
  author: {
    color: '#313131',
    fontSize: 10,
    lineHeight: 12,
    marginTop: 5,
    textAlign: 'left',
  },
});
