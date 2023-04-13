import React, {Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import Footer from '../Components/Footer';
import CustomHeader from '../Components/CustomHeader';
import NotificationScreen from '../Screens/NotificationScreen';

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            header: () => <></>,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Categories"
          options={{
            header: () => <CustomHeader name="All Categories" options={true} />,
          }}
          component={CategoryScreen}
        />
        <Stack.Screen
          name="Notification"
          options={{
            header: () => (
              <CustomHeader name="Notification(1)" options={false} />
            ),
          }}
          component={NotificationScreen}
        />
      </Stack.Navigator>
      <Footer />
    </Fragment>
  );
}

export default HomeStack;
