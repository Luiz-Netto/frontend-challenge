import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export const Profile = ({navigation}) => {
  return (
    <Pressable>
      <View style={styles.container}>
        {/* <Image /> */}
        <Text style={styles.text}>Title</Text>
        <Text style={styles.text}>Author</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  text: {textAlign: 'center', color: '#000000'},
});
