import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './Router/HomeStack';
import RNBootSplash from 'react-native-bootsplash';

function App() {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 500})}>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
