import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Dropdown from 'react-native-input-select';

interface DropDownProps {
  labelName: string;
  options: { label: string; value: string }[];
  onPress: (value: string) => void;
  containerWidth?: number;
}

const DropDown: React.FC<DropDownProps> = ({ labelName, options, onPress, containerWidth }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onPress(value);
  };
  const dropdownStyle: ViewStyle = {
    ...styles.dropdownStyle,
    ...(containerWidth && { width: containerWidth }),
  };

  return (
    <Dropdown
      label={labelName}
      options={options}
      placeholder="Select an option..."
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
      primaryColor={'blue'}
      labelStyle={styles.labelStyle}
      dropdownStyle={dropdownStyle}
      selectedItemStyle={styles.selectedItemStyle}
      placeholderStyle={styles.placeholderStyle}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    lineHeight: 24,
  },
  dropdownStyle: {
    backgroundColor: '#BFDBFE',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'blue',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  selectedItemStyle: {
    color: 'blue',
    fontWeight: 'bold',
  },
  placeholderStyle: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '500',
  },
});
