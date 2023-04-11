import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface IAdvertisementProps {
  image: string;
}

function Advertisement({image}: IAdvertisementProps) {
  return <Image source={{uri: image}} style={style.advertisement} />;
}

const style = StyleSheet.create({
  advertisement: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    paddingTop: 2,
    paddingBottom: 2,
    resizeMode: 'contain',
  },
});

export default Advertisement;
