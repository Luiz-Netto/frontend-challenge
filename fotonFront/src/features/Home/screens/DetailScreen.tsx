import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const DetailScreen = ({navigation, route}) => {
  // const {data} = route.params;
  // console.log(route.params);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AntDesign
          name="arrowleft"
          size={20}
          onPress={() => navigation.goBack()}
        />
        {/* <Image /> */}
      </View>
      <Text style={styles.text}>data</Text>
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
