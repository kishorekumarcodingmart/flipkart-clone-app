import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryIcon from 'react-native-vector-icons/AntDesign';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartIcon from 'react-native-vector-icons/AntDesign';

interface MenuList {
  icon: JSX.Element;
  iconName: string;
  color: string;
  navigate: any;
}

function Footer() {
  const navigation = useNavigation();

  const menuList: MenuList[] = [
    {
      icon: <HomeIcon name="home" size={20} color="#2a55e5" />,
      iconName: 'Home',
      color: '#2a55e5',
      navigate: () => navigation.navigate('Home'),
    },
    {
      icon: <CategoryIcon name="appstore-o" size={20} color="black" />,
      iconName: 'Categories',
      color: 'black',
      navigate: () => navigation.navigate('Categories'),
    },
    {
      icon: (
        <NotificationIcon
          name="notifications-outline"
          size={20}
          color="black"
        />
      ),
      iconName: 'Notification',
      color: 'black',
      navigate: () => navigation.navigate('Notification'),
    },
    {
      icon: (
        <AccountIcon name="account-circle-outline" size={20} color="black" />
      ),
      iconName: 'Account',
      color: 'black',
      navigate: () => navigation.navigate('Account'),
    },
    {
      icon: <CartIcon name="shoppingcart" size={20} color="black" />,
      iconName: 'Cart',
      color: 'black',
      navigate: () => navigation.navigate('Cart'),
    },
  ];

  return (
    <View style={style.footerWrapper}>
      {menuList.map((val, index) => {
        return (
          <TouchableOpacity
            style={style.menuWrapper}
            key={index}
            onPress={() => val.navigate()}>
            {val.icon}
            <Text style={{color: val.color, fontSize: 10}}>{val.iconName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  footerWrapper: {
    height: 48,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Footer;
