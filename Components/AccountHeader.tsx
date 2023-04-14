import {Image, StyleSheet, Text, View} from 'react-native';
import RightIcon from 'react-native-vector-icons/Entypo';
import SuperIcon from 'react-native-vector-icons/FontAwesome';

import React from 'react';

const AccountHeader = () => {
  return (
    <View style={styles.accountHeaderWrapper}>
      <View style={{gap: 9}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
          +917871013983
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{marginRight: 6, color: 'rgb(113, 116, 120)', fontSize: 12}}>
            Join
          </Text>
          <Image
            style={{width: 80, height: 20, resizeMode: 'contain'}}
            source={{
              uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1681370179/b5c28cff-5e9e-4b5a-bae0-5fd63aaef46e_pfeyeg.webp',
            }}
          />
          <RightIcon name="chevron-small-right" size={20} color="black" />
        </View>
      </View>
      <View>
        <View style={styles.superCoinWrapper}>
          <SuperIcon name="product-hunt" size={15} color="rgb(249, 177, 16)" />
          <Text style={{color: 'black', fontSize: 13, fontWeight: '800'}}>
            0
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  accountHeaderWrapper: {
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    alignItems: 'center',
  },
  superCoinWrapper: {
    flexDirection: 'row',
    gap: 7,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderWidth: 1,
    borderColor: 'rgb(213, 215, 219)',
    borderRadius: 20,
    height: 25,
    alignItems: 'center',
  },
});
