import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import MoreonFlipkartData from '../JSON/MoreonFlipkart.json';

const MoreonFlipkart = () => {
  return (
    <View style={styles.moreOnFlipkartWrapper}>
      {MoreonFlipkartData.map((val, index) => {
        return (
          <Image
            key={String(index)}
            source={{
              uri: val,
            }}
            style={{
              width: 93,
              height: 110,
            }}
          />
        );
      })}
    </View>
  );
};

export default MoreonFlipkart;

const styles = StyleSheet.create({
  moreOnFlipkartWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 3,
  },
});
