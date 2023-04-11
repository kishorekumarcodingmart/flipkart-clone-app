import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './Router/HomeStack';
import HomeScreens from './Screens/HomeScreens';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
