import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>PROFILE SCREEN</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF9',
  },
  text: {textAlign: 'center', color: '#000000'},
});
