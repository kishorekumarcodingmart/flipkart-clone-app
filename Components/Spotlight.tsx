import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native';
import SpotlightData from '../JSON/Spotlight.json';

function Spotlight() {
  return (
    <View style={style.spotlightWrapper}>
      <View style={[style.spotlightWrapperHeaderImage]}>
        <ImageBackground
          source={{
            uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1681126542/Reco_Eid_f0caff_c8v5mu.webp',
          }}
          style={{height: '100%', width: '100%'}}>
          <View style={style.spotlightWrapperHeader}>
            <View>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 16}}>
                Spotlight's On
              </Text>
            </View>
            <View style={{backgroundColor: 'white', borderRadius: 5}}>
              <Text style={{padding: 5, color: 'black'}}>View all</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={style.spotlightProdunctListing}>
        {SpotlightData.map((val, index) => {
          return (
            <View style={style.spotlightProdunctWrapper} key={index}>
              <Image
                source={{
                  uri: val.url,
                }}
                style={{width: 100, height: 100, resizeMode: 'contain'}}
              />
              <Text style={{color: 'black', fontSize: 12}}>
                {val.productName}
              </Text>
              <Text style={{color: 'rgb(56, 142, 60)'}}>{val.off}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  spotlightWrapper: {
    height: 400,
    backgroundColor: 'rgb(240, 202, 255)',
    width: '100%',
  },
  spotlightWrapperHeaderImage: {
    height: '18%',
  },
  spotlightWrapperHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: 12,
    paddingRight: 12,
  },
  spotlightProdunctListing: {
    height: '82%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  spotlightProdunctWrapper: {
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Spotlight;
