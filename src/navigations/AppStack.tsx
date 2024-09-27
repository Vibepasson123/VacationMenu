import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* import { BottomTabNavigator } from './BottomTabNavigator'; */
import BottomTabBar from './BottomTabr';
import FilterList from '../screens/vm/FilterList';
import HotelDetails from '../screens/vm/HotelDetails';


const Stack = createNativeStackNavigator() as any;

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomTabBar} options={{ headerShown: false }} />
      <Stack.Screen name="HoltelViewList" component={FilterList} options={{ headerShown: false }} />
      <Stack.Screen name="HoltelDetails" component={HotelDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStack;
