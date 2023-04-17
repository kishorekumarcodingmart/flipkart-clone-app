import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryIcon from 'react-native-vector-icons/AntDesign';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/AntDesign';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import CustomHeader from '../Components/CustomHeader';
import NotificationScreen from '../Screens/NotificationScreen';
import AccountScreen from '../Screens/AccountScreen';
import AccountHeader from '../Components/AccountHeader';
import CartScreen from '../Screens/CartScreen';

const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? (
                <HomeIcon name="home" size={20} color="#2a55e5" />
              ) : (
                <HomeIcon name="home" size={20} color="black" />
              );
              return iconName;
            } else if (route.name === 'Categories') {
              iconName = focused ? (
                <CategoryIcon name="appstore-o" size={20} color="#2a55e5" />
              ) : (
                <CategoryIcon name="appstore-o" size={20} color="black" />
              );
              return iconName;
            } else if (route.name === 'Notification') {
              iconName = focused ? (
                <NotificationIcon
                  name="notifications-outline"
                  size={20}
                  color="#2a55e5"
                />
              ) : (
                <NotificationIcon
                  name="notifications-outline"
                  size={20}
                  color="black"
                />
              );
              return iconName;
            } else if (route.name === 'Account') {
              iconName = focused ? (
                <AccountIcon
                  name="account-circle-outline"
                  size={20}
                  color="#2a55e5"
                />
              ) : (
                <AccountIcon
                  name="account-circle-outline"
                  size={20}
                  color="black"
                />
              );
              return iconName;
            } else if (route.name === 'Cart') {
              iconName = focused ? (
                <CartIcon name="shoppingcart" size={20} color="#2a55e5" />
              ) : (
                <CartIcon name="shoppingcart" size={20} color="black" />
              );
              return iconName;
            }
          },
        })}>
        <Tab.Screen
          options={{header: () => <></>}}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            header: () => <CustomHeader name="All Categories" options={true} />,
          }}
          name="Categories"
          component={CategoryScreen}
        />
        <Tab.Screen
          options={{
            header: () => (
              <CustomHeader name="Notification(1)" options={false} />
            ),
          }}
          name="Notification"
          component={NotificationScreen}
        />
        <Tab.Screen
          options={{header: () => <AccountHeader />}}
          name="Account"
          component={AccountScreen}
        />
        <Tab.Screen
          options={{headerTitle: 'My Cart'}}
          name="Cart"
          component={CartScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
