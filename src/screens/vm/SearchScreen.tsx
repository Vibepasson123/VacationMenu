import {  Text, View } from 'react-native';
import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { PriceContainer } from '../../styled/styled';

const SearchScreen = () => {
  return (
    <View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
      <PriceContainer />
      <Svg height="220" width="150">
        <Circle
          cx="75"  // Center X position of the circle (half of the width)
          cy="110" // Center Y position of the circle (half of the height)
          r="75"   // Radius of the circle
          stroke="black" // Circle border color
          strokeWidth="2" // Circle border width
          fill="blue" // Circle fill color
        />
      </Svg>
    </View>
  );
};

export default SearchScreen;

