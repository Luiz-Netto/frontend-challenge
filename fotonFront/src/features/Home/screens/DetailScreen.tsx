import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const originals = require('../assets/Originals.png');

export const DetailScreen = ({navigation, route}) => {
  const book = route.params.data;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <AntDesign
            name="arrowleft"
            size={20}
            onPress={() => navigation.goBack()}
            style={styles.icon}
          />
          <Image source={originals} style={styles.image} />
        </View>
        <View style={styles.bookInfoContainer}>
          {book.volumeInfo.subtitle ? (
            <Text style={styles.subTitle}>
              <Text style={styles.title}>{`${book.volumeInfo.title}`}</Text>
              {`: ${book.volumeInfo.subtitle}`}
            </Text>
          ) : (
            <Text style={styles.title}>{`${book.volumeInfo.title}`}</Text>
          )}
          <Text style={styles.author}>{`${book.volumeInfo.authors}`}</Text>
          {book.volumeInfo.description ? (
            <Text
              style={
                styles.description
              }>{`${book.volumeInfo.description}`}</Text>
          ) : (
            <Text style={styles.description}>
              This book has no description available
            </Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footerContainer}>
          <Feather name="book-open" size={18} color="#CFCBD2" />
          <Text style={styles.footerLabel}>READ</Text>
        </View>
        <View style={styles.footerSeparator} />
        <View style={styles.footerContainer}>
          <Feather name="headphones" size={18} color="#CFCBD2" />
          <Text style={styles.footerLabel}>READ</Text>
        </View>
        <View style={styles.footerSeparator} />
        <View style={styles.footerContainer}>
          <Feather name="share" size={18} color="#CFCBD2" />
          <Text style={styles.footerLabel}>READ</Text>
        </View>
      </View>
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
    marginBottom: 20,
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
    top: 20,
  },
  bookInfoContainer: {flex: 1, marginTop: 60, marginHorizontal: 20},
  subTitle: {
    textAlign: 'left',
    color: '#36383A',
    fontSize: 24,
    fontWeight: '400',
  },
  title: {
    color: '#36383A',
    fontSize: 24,
    fontWeight: 'bold',
  },
  author: {
    textAlign: 'left',
    color: '#FF6978',
    fontSize: 16,
    lineHeight: 18,
    marginVertical: 10,
  },
  description: {
    textAlign: 'left',
    color: '#313131',
    fontSize: 14,
    lineHeight: 25,
  },
  footerContainer: {
    maxHeight: 56,
    marginHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerReadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLabel: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '700',
    color: '#3F4043',
  },
  footerSeparator: {
    width: 1,
    height: '60%',
    backgroundColor: '#CFCBD2',
    borderColor: '#CFCBD2',
  },
});
