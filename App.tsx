/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
/* import VmHome from './src/screens/vm/VmHome'; */
import { HotelManagerProvider } from './src/HotelManager/hotel-provider';
import HotelList from './src/screens/vm/HotelList';

LogBox.ignoreAllLogs();
const App: React.FC = () => {

  return (
    <HotelManagerProvider>
     {/*  <VmHome /> */}
     <HotelList/>
    </HotelManagerProvider>

  );

};


export default App;
