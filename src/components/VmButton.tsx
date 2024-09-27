import React from 'react';
import styled from 'styled-components/native';

interface VmButtonProps {
  title: string;
  onPress: () => void;
}

const VmButton: React.FC<VmButtonProps> = ({ title, onPress }) => {
  return (
    <VmStyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </VmStyledButton>
  );
};

export default VmButton;

const VmStyledButton = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
  padding: 15px;
  background-color: #3B82F6;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
