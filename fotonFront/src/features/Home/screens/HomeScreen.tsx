import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, Pressable, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {BookItem, BookShowcase, SearchBar, SectionTitle} from '../components';
import {INITIAL_SHOWCASE_BOOKS, READING_BOOK} from '../assets';

const originals = require('../assets/Originals.png');
const review = require('../assets/Review.webp');
interface ICarouselRenderItemProps {
  item: any;
  index: number;
}

export const HomeScreen = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBooks(search);
  }, [search]);

  const toDetails = (data: any) => {
    navigation.navigate('Detail', {data});
  };

  const fetchBooks = async (querry: string) =>
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${querry}&maxResults=9&projection=lite`,
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(obj => setBooks(obj.items))
      .catch(e => console.error('Something went wrong', e));

  const cauroselItem = (props: ICarouselRenderItemProps) => {
    return (
      <BookShowcase
        data={props.item}
        even={(props.index + 1) % 2 === 0}
        goToDetails={toDetails}
      />
    );
  };
  return (
    <SafeAreaView style={styles.screenContainer}>
      <SearchBar
        value={search}
        onChangeText={newText => {
          setSearch(newText);
        }}
      />
      {!(search === '') ? (
        <View style={styles.searchResultsContainer}>
          <FlatList
            data={books}
            renderItem={({item}) => {
              return <BookItem props={item} goToDetails={toDetails} />;
            }}
            keyExtractor={book => book.id.toString()}
            numColumns={3}
          />
        </View>
      ) : (
        <ScrollView>
          <View>
            <View style={styles.greetings}>
              <Text style={styles.greetingsText}>
                Hi,{' '}
                <Text style={styles.greetingsTextName}>Mehmed Al Fatih</Text> 👋
              </Text>
            </View>
            <SectionTitle title="Discover New Book" link="More" />
            <View>
              <Carousel
                data={INITIAL_SHOWCASE_BOOKS}
                renderItem={cauroselItem}
                itemWidth={270}
                sliderWidth={400}
                activeSlideAlignment="start"
                contentContainerCustomStyle={styles.carouselContent}
              />
            </View>
            <SectionTitle title="Currently Reading" link="All" />
            <Pressable onPress={() => toDetails(READING_BOOK)}>
              <View style={styles.readingContainer}>
                <Image source={originals} style={styles.readingBookCover} />
                <View style={styles.readingInfo}>
                  <Text style={styles.readingTitle}>Originals</Text>
                  <Text style={styles.readingAuthor}>by Adam Grant</Text>
                  <View style={styles.readingChapterContainer}>
                    <AntDesign name="book" size={14} color="#9013FE" />
                    <Text style={styles.readingChapterText}>
                      chapter
                      <Text style={styles.readingChapterNumber}> 2 </Text>
                      from 9
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <SectionTitle title="Reviews of The Days" link="All video" />
            <View style={styles.reviewContainer}>
              <Image source={review} style={styles.reviewImage} />
              <View style={styles.reviewInfoContainer}>
                <Text style={styles.reviewInfoTitle}>
                  Don’t Make Me Think - Steve Krug
                </Text>
                <View style={styles.reviewInfoTextContainer}>
                  <Text style={styles.reviewInfoText}>Jesse Showalter </Text>
                  <Text style={styles.reviewInfoText}>5.2K Views </Text>
                  <Text style={styles.reviewInfoText}>1 Week ago</Text>
                </View>
                <Text style={styles.reviewTextDescription}>
                  "Don't Make Me Think" by Steve Krug is one of the first books
                  I read when I was getting into digital design. It helped me
                  move from designing things that just "look nice" to designing
                  things that are usable, useful, memorable and simple to learn
                  and use.{' '}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFCF9',
  },
  searchResultsContainer: {marginHorizontal: 20},
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
    marginBottom: 20,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    flexDirection: 'row',
  },
  readingBookCover: {
    maxHeight: 140,
    maxWidth: 100,
    position: 'relative',
    bottom: 20,
    marginLeft: 20,
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
  reviewContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  reviewImage: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  reviewInfoContainer: {marginTop: 12},
  reviewInfoTitle: {fontSize: 12, fontWeight: '700'},
  reviewInfoTextContainer: {flexDirection: 'row', marginTop: 12},
  reviewInfoText: {fontSize: 8, fontWeight: '400', lineHeight: 9},
  reviewTextDescription: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    marginTop: 12,
  },
});
