import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import CategoryData from '../JSON/Category.json';

function Category() {
  return (
    <View style={style.categoryList}>
      {CategoryData.map(val => {
        return (
          <Image
            style={style.categoryImage}
            key={val.key}
            source={{uri: val.url}}
          />
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  categoryList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 10,
    backgroundColor: 'white',
  },
  categoryImage: {
    height: 100,
    width: '20%',
  },
});

export default Category;
