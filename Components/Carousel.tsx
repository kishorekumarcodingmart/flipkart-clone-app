import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import CarouselData from '../JSON/Carousel.json';

function Carousel() {
  const {width} = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={CarouselData}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <Image
              style={[
                style.carouselImage,
                {
                  width,
                },
              ]}
              source={{uri: item.url}}
            />
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  carouselImage: {
    height: 180,
  },
});

export default Carousel;
