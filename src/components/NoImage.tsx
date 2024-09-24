import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { HotelManager } from '../utils/GlobalValues';
import PulseText from './PulseText';
const styles = StyleSheet.create({
  lotteImage: { width: 182, height: 192 },
});

 const Container = styled.View`
  height: 30%;
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const NoImage = () => {
  return (
    <Container>
      <Lottie
        style={styles.lotteImage}
        resizeMode="cover"
        source={HotelManager.NoImage}
        autoPlay
        loop
      />
      <PulseText message={'comming-soon'} />
    </Container>
  );
};

export default NoImage;
