import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IFestivalProductCardProps {
  imageUrl: string;
  productName: string;
  productOffer: string;
}

function FestivalProductCard({
  imageUrl,
  productName,
  productOffer,
}: IFestivalProductCardProps) {
  return (
    <View style={style.festivalCardProductWrapper}>
      <Image
        style={{
          height: 148,
          width: 148,
          resizeMode: 'contain',
        }}
        source={{
          uri: imageUrl,
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          paddingLeft: 14,
          paddingRight: 14,
          paddingTop: 5,
          fontWeight: '400',
          color: 'black',
        }}>
        {productName}
      </Text>
      <Text style={{textAlign: 'left', paddingLeft: 14, color: 'black'}}>
        {productOffer}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  festivalCardProductWrapper: {
    height: 200,
    backgroundColor: 'white',
    width: 148,
    borderRadius: 4,
    marginRight: 8,
  },
});

export default FestivalProductCard;
