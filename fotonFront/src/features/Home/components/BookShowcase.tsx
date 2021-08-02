import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IBookShowcaseProps {
  data: any;
  even: boolean;
  goToDetails: (data: any) => void;
}

export const BookShowcase = (props: IBookShowcaseProps) => {
  return (
    <Pressable
      onPress={() => {
        props.goToDetails(props.data);
        console.log(props.data);
      }}>
      <View
        style={[
          styles.container,
          props.even ? styles.containerEven : styles.containerOdd,
        ]}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.author}>Author</Text>
          </View>
          <View style={styles.bookInfoContainer}>
            <MaterialIcons
              name="insert-chart-outlined"
              size={12}
              style={styles.bookInfoIcon}
            />
            <Text style={styles.bookInfoText}>
              <Text style={styles.bookInfoNumber}>Number</Text> Read Now
            </Text>
          </View>
        </View>
        {/* <Image /> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00173D',
    width: 270,
    height: 140,
    borderRadius: 9,
    flexDirection: 'row',
  },
  containerEven: {backgroundColor: '#451475'},
  containerOdd: {backgroundColor: '#00173D'},
  titleContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  title: {fontSize: 27, color: '#FEFEFE', fontWeight: 'bold'},
  author: {
    fontSize: 14,
    color: '#E7E7E1',
  },
  bookInfoContainer: {flexDirection: 'row'},
  bookInfoIcon: {color: '#E7E7E1'},
  bookInfoText: {
    fontSize: 10,
    color: '#E7E7E1',
  },
  bookInfoNumber: {
    fontSize: 10,
    color: '#E7E7E1',
    fontWeight: 'bold',
  },
});
