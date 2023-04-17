import {StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';

interface ICartTabProps {
  tab: 'flipkart' | 'grocery';
  setTab: React.Dispatch<React.SetStateAction<'flipkart' | 'grocery'>>;
}

const CartTab = ({tab, setTab}: ICartTabProps) => {
  return (
    <View>
      <View style={style.cartTabWrapper}>
        <Text style={style.cartTabtitle} onPress={() => setTab('flipkart')}>
          Flipkart
        </Text>
        <Text style={style.cartTabtitle} onPress={() => setTab('grocery')}>
          Grocery
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={
            tab === 'flipkart' ? style.activeTab : style.unActiveTab
          }></View>
        <View
          style={
            tab === 'grocery' ? style.activeTab : style.unActiveTab
          }></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cartTabWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    height: 55,
  },
  cartTabtitle: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    width: '50%',
    fontSize: 16,
    color: 'rgb(42, 85, 229)',
  },
  activeTab: {
    height: '100%',
    width: '46%',
    borderTopWidth: 3,
    borderTopColor: 'rgb(42, 85, 229)',
    marginLeft: '2%',
    marginRight: '2%',
  },
  unActiveTab: {
    height: '100%',
    width: '46%',
    borderTopWidth: 3,
    borderTopColor: 'white',
    marginLeft: '2%',
    marginRight: '2%',
  },
});
export default CartTab;
