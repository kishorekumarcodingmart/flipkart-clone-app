import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';

const CartComponent = () => {
  return (
    <Fragment>
      <View style={styles.cartComponent}>
        <Image
          style={{
            width: '90%',
            height: '70%',
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://res.cloudinary.com/dpwq3oij5/image/upload/v1681546976/d438a32e-765a-4d8b-b4a6-520b560971e8_jwkxgz.webp',
          }}
        />
        <Text
          style={{color: 'rgb(17, 17, 18)', fontSize: 20, fontWeight: '600'}}>
          Your cart is empty!
        </Text>
        <TouchableOpacity
          style={{
            padding: 6,
            borderRadius: 4,
            width: 160,
            backgroundColor: 'rgb(42, 85, 229)',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Shop now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View style={{padding: 16, marginBottom: 10}}>
          <Text style={{color: 'rgb(33, 33, 33)', fontSize: 16}}>
            Suggested for You
          </Text>
          <Text style={{color: 'rgb(135, 135, 135)', fontSize: 14}}>
            Based on Your Activity
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}></View>
      </View>
    </Fragment>
  );
};

export default CartComponent;

const styles = StyleSheet.create({
  cartComponent: {
    height: 325,
    padding: 16,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
