import React, {useState} from 'react';

import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import {BookShowcase, SearchBar, SectionTitle} from '../components';

interface ICarouselRenderItemProps {
  item: any;
  index: number;
}

export const HomeScreen = () => {
  const testArray = [1, 2, 3, 4, 5, 6];
  const cauroselItem = (props: ICarouselRenderItemProps) => (
    <BookShowcase data={props.item} even={(props.index + 1) % 2 === 0} />
  );

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
});
