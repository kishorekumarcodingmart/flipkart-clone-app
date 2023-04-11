import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Footer() {
  return <Text style={style.footerWrapper}>Footer</Text>;
}

const style = StyleSheet.create({
  footerWrapper: {
    height: 48,
    backgroundColor: 'red',
  },
});

export default Footer;
