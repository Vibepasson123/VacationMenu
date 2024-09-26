/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import { HotelManagerProvider } from './src/HotelManager/hotel-provider';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import { enableScreens } from 'react-native-screens';

LogBox.ignoreAllLogs();
const App: React.FC = () => {
  enableScreens();

  return (
    <HotelManagerProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </HotelManagerProvider>

  );

};


export default App;
