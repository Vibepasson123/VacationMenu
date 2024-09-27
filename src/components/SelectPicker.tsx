import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface SelectPickerProps {
  placeholder: string;
  iconName: string;
  items: { label: string; value: any }[];
  onValueChange: (value: any) => void;
}

const SelectPicker: React.FC<SelectPickerProps> = ({ placeholder, iconName, items, onValueChange }) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <StyledIcon name={iconName} size={20} color="gray" />
        <StyledPicker
          onValueChange={onValueChange}
          items={items}
          placeholder={{ label: placeholder, value: null, color: 'gray' }}
          useNativeAndroidPickerStyle={false}
          style={{
            inputAndroid: {
              fontSize: 16,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 8,
              color: 'black',
            },
            inputIOS: {
              fontSize: 16,
              paddingVertical: 10,
              paddingHorizontal: 8,
              borderRadius: 8,
              color: 'black',
            },
            placeholder: {
              fontSize: 16,
              color: 'gray',
            },
            iconContainer: {
              top: 12,
              right: 12,
            },
          }}
        />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default SelectPicker;

const SearchContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  padding-horizontal: 12px;
  padding-vertical: 2px;
  height: 40px;
  margin: 2px;
  width: 170px;
  align-self: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 3;
`;

const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const StyledIcon = styled(Icon)`
  margin-right: 8px;
`;

const StyledPicker = styled(RNPickerSelect)`
  flex: 1;
`;


