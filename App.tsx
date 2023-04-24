import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './Router/HomeStack';
import RNBootSplash from 'react-native-bootsplash';
import codePush from 'react-native-code-push';

function App() {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 400})}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default codePush(App);
