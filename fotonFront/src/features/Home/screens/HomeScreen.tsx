import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {BookShowcase, SearchBar, SectionTitle} from '../components';

interface ICarouselRenderItemProps {
  item: any;
  index: number;
}

export const HomeScreen = ({navigation}) => {
  const testArray = [1, 2, 3, 4, 5, 6];
  const cauroselItem = (props: ICarouselRenderItemProps) => {
    const data = props.item;
    return (
      <Pressable
        onPress={data => {
          navigation.navigate('Detail', {data});
        }}>
        <BookShowcase data={data} even={(props.index + 1) % 2 === 0} />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar />
      <View style={styles.greetings}>
        <Text style={styles.greetingsText}>
          Hi, <Text style={styles.greetingsTextName}>Mehmed Al Fatih</Text> 👋
        </Text>
      </View>
      <SectionTitle title="Discover New Book" link="More" />
      <View>
        <Carousel
          data={testArray}
          renderItem={cauroselItem}
          itemWidth={270}
          sliderWidth={400}
          activeSlideAlignment="start"
          contentContainerCustomStyle={styles.carouselContent}
        />
      </View>
      <SectionTitle title="Currently Reading" link="All" />
      <View style={styles.readingContainer}>
        <View>
          {/* <Image style={styles.readingBookCover}/> */}
          <View style={styles.readingInfo}>
            <Text style={styles.readingTitle}>Title</Text>
            <Text style={styles.readingAuthor}>Author</Text>
            <View style={styles.readingChapterContainer}>
              <AntDesign name="book" size={14} color="#9013FE" />
              <Text style={styles.readingChapterText}>
                chapter<Text style={styles.readingChapterNumber}>2</Text>from 9
              </Text>
            </View>
          </View>
        </View>
      </View>
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
  carouselContent: {marginLeft: 20},
  readingContainer: {
    backgroundColor: '#EEF5DB',
    height: 100,
    marginRight: 44,
    marginTop: 30,
    marginBottom: 45,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  readingBookCover: {
    maxHeight: 140,
    maxWidth: 100,
    position: 'relative',
    bottom: 20,
    top: 20,
  },
  readingInfo: {marginTop: 16, marginBottom: 10, marginLeft: 10},
  readingTitle: {fontSize: 20, letterSpacing: 2, color: '#2A2B26'},
  readingAuthor: {fontSize: 10, color: '#74776D'},
  readingChapterContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  readingChapterText: {fontSize: 10, color: '#2A2B26', letterSpacing: 0.02},
  readingChapterNumber: {fontSize: 10, color: '#F65066', letterSpacing: 0.02},
});
