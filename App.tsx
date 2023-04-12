import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './Router/HomeStack';

function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
