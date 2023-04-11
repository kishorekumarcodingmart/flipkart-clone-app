import React from 'react';
import {ImageBackground, StyleSheet, View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FestiveSpecialData from '../JSON/FestiveSpecial.json';
import FestivalProductCard from './FestivalProductCard';
import SmallFestivalProductCard from './SmallFestivalProductCard';
import SmallFestivalProductCardData from '../JSON/FestivalProductCard.json';

function FestiveSpecial() {
  return (
    <View style={style.festiveSpecialWrapper}>
      <View style={style.festiveSpecialHeaderImage}>
        <ImageBackground
          style={{
            height: '100%',
          }}
          source={{
            uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1680862609/Flipkart%20Logo/f23a5ff0e0b73dbe_p7wsik.webp',
          }}>
          <View style={style.festiveSpecialHeader}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 15,
              }}>
              Festive Special Deals
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
              }}>
              <Text style={{color: 'white', fontSize: 13}}>Ends In</Text>
              <Text
                style={{
                  backgroundColor: '#2a55e5',
                  color: 'white',
                  padding: 2,
                  fontSize: 10,
                  borderRadius: 3,
                }}>
                08h : 31m : 12s
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <LinearGradient
        colors={['#321155', '#7C37CB']}
        style={style.festiveSpecialProductWrapper}>
        <View style={style.festiveSpecialCarouselProductWrapper}>
          <FlatList
            data={FestiveSpecialData}
            showsHorizontalScrollIndicator={false}
            horizontal
            keyExtractor={item => item.key}
            renderItem={({item}) => {
              return (
                <FestivalProductCard
                  imageUrl={item.url}
                  productName={item.productName}
                  productOffer={item.off}
                />
              );
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {SmallFestivalProductCardData.map((val, index) => {
            return <SmallFestivalProductCard url={val} key={index} />;
          })}
        </View>
      </LinearGradient>
    </View>
  );
}

const style = StyleSheet.create({
  festiveSpecialWrapper: {
    width: '100%',
    height: 400,
    backgroundColor: 'red',
  },
  festiveSpecialHeaderImage: {
    height: '18%',
    width: '100%',
  },
  festiveSpecialHeader: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 12,
    gap: 3,
  },
  festiveSpecialProductWrapper: {
    height: '82%',
  },
  festiveSpecialCarouselProductWrapper: {
    height: '63%',
    paddingLeft: 15,
  },
});

export default FestiveSpecial;
