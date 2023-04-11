import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from '../Screens/HomeScreens';

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          header: () => <></>,
        }}
        name="Home"
        component={HomeScreens}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
