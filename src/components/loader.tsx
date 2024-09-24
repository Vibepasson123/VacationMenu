import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { HotelManager } from '../utils/GlobalValues';
const styles = StyleSheet.create({
  lotteImage: { width: 82, height: 82 },
});

 const Container = styled.View`
  height: 30%;
  width: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Container>
      <Lottie
        style={styles.lotteImage}
        resizeMode="cover"
        source={HotelManager.WaitLoader}
        autoPlay
        loop
      />
    </Container>
  );
};

export default Loader;
