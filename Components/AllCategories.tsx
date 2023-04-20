import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AllCategoriesData from '../JSON/AllCategories.json';

const AllCategories = () => {
  return (
    <View style={styles.allCategories}>
      {AllCategoriesData.map((val, index) => {
        return (
          <Image
            key={String(index)}
            source={{
              uri: val,
            }}
            style={{
              width: 125,
              height: 133,
            }}
          />
        );
      })}
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  allCategories: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // gap: 3,
  },
});
