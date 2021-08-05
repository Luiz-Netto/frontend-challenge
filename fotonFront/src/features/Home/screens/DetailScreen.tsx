import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

const origials = require('../assets/Originals.png');

export const DetailScreen = ({navigation, route}) => {
  // const {data} = route.params;
  console.log(route.params.data.volumeInfo.title);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <AntDesign
          name="arrowleft"
          size={20}
          onPress={() => navigation.goBack()}
          style={styles.icon}
        />
        <Image source={origials} style={styles.image} />
      </View>
      <Text style={styles.text}>data</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCF9',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#FFF6E5',
    borderBottomRightRadius: 100,
    maxHeight: 280,
  },
  icon: {
    alignSelf: 'flex-start',
    marginTop: 55,
    marginLeft: 30,
  },
  image: {
    width: 150,
    height: 234,
    marginHorizontal: 110,
    position: 'relative',
    top: 30,
  },
  text: {textAlign: 'center', color: '#000000'},
});
