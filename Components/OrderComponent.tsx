import {StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import BoxIcon from 'react-native-vector-icons/Feather';
import WishListIcon from 'react-native-vector-icons/Feather';
import CouponsIcon from 'react-native-vector-icons/Feather';
import HelpIcon from 'react-native-vector-icons/Feather';

interface IOrderDetails {
  icon: JSX.Element;
  text: string;
}

const OrderComponent = () => {
  const orderDetails: IOrderDetails[] = [
    {
      icon: <BoxIcon name="box" size={20} color="rgb(42, 85, 229)" />,
      text: 'Orders',
    },
    {
      icon: <WishListIcon name="heart" size={20} color="rgb(42, 85, 229)" />,
      text: 'Wishlist',
    },
    {
      icon: <CouponsIcon name="gift" size={20} color="rgb(42, 85, 229)" />,
      text: 'Coupons',
    },
    {
      icon: <HelpIcon name="headphones" size={20} color="rgb(42, 85, 229)" />,
      text: 'Help Center',
    },
  ];

  return (
    <View style={[styles.orderComponentWrapper, styles.padding]}>
      {orderDetails.map((val, index) => {
        return (
          <View style={[styles.orderComponentBox, styles.padding]} key={index}>
            <Fragment>{val.icon}</Fragment>
            <Text style={{fontWeight: '600', color: 'black'}}>{val.text}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default OrderComponent;

const styles = StyleSheet.create({
  orderComponentWrapper: {
    marginBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: 120,
    alignItems: 'center',
  },
  orderComponentBox: {
    borderColor: 'rgb(213, 215, 219)',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    width: '48%',
  },
  padding: {
    paddingTop: 10,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
});
