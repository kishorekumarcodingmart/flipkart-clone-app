import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import CarouselData from '../JSON/Carousel.json';

interface IItems {
  key: string;
  url: string;
}

function Carousel() {
  const {width} = useWindowDimensions();

  const keyExtractor = useCallback((item: IItems) => item.key, []);

  const renderItems = useCallback(({item}: any) => {
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
  }, []);

  return (
    <View>
      <FlatList
        data={CarouselData}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={keyExtractor}
        decelerationRate={'fast'}
        snapToInterval={width}
        renderItem={renderItems}
        maxToRenderPerBatch={10}
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
