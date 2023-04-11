import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function Header() {
  return (
    <View style={style.headerWrapper}>
      <Image
        style={style.headerImage}
        source={{
          uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1680859117/Flipkart%20Logo/fk_logo_light_theme_zafhvu.webp',
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 55,
    backgroundColor: 'white',
  },
  headerImage: {
    marginLeft: 12,
    height: 35,
    width: '30%',
    resizeMode: 'stretch',
  },
});

export default Header;
