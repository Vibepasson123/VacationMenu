import React from 'react';
import styled from 'styled-components/native';
import Lottie from 'lottie-react-native';
import { HotelManager } from '../utils/GlobalValues';

interface NoImageProps {
  width?: number;
  height?: number;
  cHp?: number;
}

const Container = styled.View<{ heightProp: number }>`
  height: ${({ heightProp }) => heightProp}%;
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
 
`;

const NoImage: React.FC<NoImageProps> = ({ width = 182, height = 92, cHp = 60 }) => {
  return (
    <Container heightProp={cHp}>
      <Lottie
        style={{ width: width, height: height }}
        resizeMode="cover"
        source={HotelManager.NoImage}
        autoPlay
        loop
      />
    </Container>
  );
};

export default NoImage;
