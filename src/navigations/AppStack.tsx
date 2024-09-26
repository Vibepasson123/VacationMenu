import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* import { BottomTabNavigator } from './BottomTabNavigator'; */
import BottomTabBar from './BottomTabr';


const Stack = createNativeStackNavigator() as any;

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomTabBar} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStack;
