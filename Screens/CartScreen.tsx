import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {Fragment, useState} from 'react';
import CartComponent from '../Components/CartComponent';
import GroceryComponent from '../Components/GroceryComponent';
import CartTab from '../Components/CartTab';

const CartScreen = () => {
  const [tab, setTab] = useState<'flipkart' | 'grocery'>('flipkart');

  return (
    <ScrollView>
      <CartTab tab={tab} setTab={setTab} />
      {tab === 'flipkart' ? <CartComponent /> : <GroceryComponent />}
    </ScrollView>
  );
};

const style = StyleSheet.create({});

export default CartScreen;
