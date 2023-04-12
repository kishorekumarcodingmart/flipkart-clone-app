import {ScrollView} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import AllCategories from '../Components/AllCategories';
import MoreonFlipkart from '../Components/MoreonFlipkart';
import DividerHeader from '../Components/DividerHeader';

const CategoryScreen = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <AllCategories />
      <DividerHeader content="More on Flipkart" />
      <MoreonFlipkart />
      <DividerHeader content="Trending Stores" />
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1681283243/57a37599d91eeb9d_o3qkn0.webp',
        }}
        style={{
          height: 125,
          width: '100%',
          resizeMode: 'stretch',
        }}
      />
    </ScrollView>
  );
};

export default CategoryScreen;
