import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface ISmallFestivalProductCardProps {
  url: string;
}

function SmallFestivalProductCard({url}: ISmallFestivalProductCardProps) {
  return (
    <Image
      source={{
        uri: url,
      }}
      style={style.smallFestivalProductCardWrapper}
    />
  );
}

const style = StyleSheet.create({
  smallFestivalProductCardWrapper: {
    width: 90,
    height: 100,
    borderRadius: 4,
    marginTop: 4,
  },
});

export default SmallFestivalProductCard;
