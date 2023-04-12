import React, {Fragment} from 'react';
import {FlatList, Image, ScrollView, View, StatusBar} from 'react-native';
import Header from '../Components/Header';
import Search from '../Components/Search';
import Carousel from '../Components/Carousel';
import Category from '../Components/Category';
import Advertisement from '../Components/Advertisement';
import FestiveSpecial from '../Components/FestiveSpecial';
import SoundProducts from '../JSON/SoundProducts.json';
import PriceDropdown from '../JSON/PriceDropdown.json';
import ServiceCarousel from '../JSON/ServiceCarousel.json';
import Spotlight from '../Components/Spotlight';

function HomeScreen() {
  return (
    <Fragment>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView stickyHeaderIndices={[1]}>
        <Header />
        <Search />
        <Carousel />
        <Category />
        <Advertisement image="https://res.cloudinary.com/dpwq3oij5/image/upload/v1680856703/Flipkart%20Logo/c5f668762c3730be_fufroq.webp" />
        <FestiveSpecial />
        <View
          style={{
            width: '100%',
            height: 166,
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
          }}>
          {SoundProducts.map((val, index) => {
            return (
              <Image
                source={{uri: val}}
                key={index}
                style={{height: '100%', width: '33%'}}
              />
            );
          })}
        </View>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1681110216/Flipkart%20Logo/612e64cb0f93ae33_gc7xif.webp',
          }}
          style={{
            width: '100%',
            height: 145,
          }}
        />
        <Spotlight />
        <View style={{flexDirection: 'row'}}>
          {PriceDropdown.map((val, index) => {
            return (
              <Image
                source={{uri: val}}
                key={index}
                style={{height: 187, width: '50%', resizeMode: 'stretch'}}
              />
            );
          })}
        </View>
        <FlatList
          data={ServiceCarousel}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => {
            return (
              <Image
                source={{uri: item}}
                style={{width: 145, height: 218, margin: 7}}
              />
            );
          }}
        />
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1681120200/7636a9a378247971_v4mxn5.webp',
          }}
          style={{height: 52, width: '100%'}}
        />
      </ScrollView>
    </Fragment>
  );
}

export default HomeScreen;
