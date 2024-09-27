import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useHotelManger } from '../HotelManager/hotel-context';
import {
  HeaderContainer,
  IconContainer,
  LocationContainer,
  LocationRow,
  LocationText,
  ModalContent,
  ModalWrapper,
  RightIconsContainer,
  SearchContainer,
  SearchInput,
  SearchRow,
  SuggestionsContainer,
  SuggestionText,
} from '../styled/styled';
import { truncateText } from '../utils/helper';
import StackedMenu from './StackedMenu';
const Header: React.FC = () => {
  const { searchText, suggestions, handleSearchChange } = useHotelManger();
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const handlePress = (value: string) => {
    handleSearchChange({ searchType: 'sortBy',
      value:value});
      setModalVisible(false);
  };

  const handleClose = () => {
    handleSearchChange({ searchType: 'sortBy',
      value:'none'});
    setModalVisible(false);
  };


  const renderModalContent = () => (
    <ModalContent>
       <StackedMenu onPress={(val)=>handlePress(val)} onClose={handleClose} />
    </ModalContent>
  );


  const renderSuggestions = () => {
    if (!showSuggestions || suggestions?.length === 0) {
      return null;
    }
    return (
      <SuggestionsContainer>
        {suggestions?.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handleSearchChange({
                searchType: 'searchByWord',
                value: suggestion,
              });
              setShowSuggestions(false);
            }}
          >
            <SuggestionText>{suggestion}</SuggestionText>
          </TouchableOpacity>
        ))}
      </SuggestionsContainer>
    );
  };

  return (
    <HeaderContainer>
      <LocationContainer>
        <LocationRow>
          <Icon name="location-outline" size={24} color="white" />
          <LocationText>{truncateText('Home', 20)}</LocationText>
        </LocationRow>
        <RightIconsContainer>
          <IconContainer>
            <Icon name="notifications-outline" size={24} color="white" />
          </IconContainer>
        </RightIconsContainer>
      </LocationContainer>
      <SearchRow>
        <SearchContainer isFocused={isFocused}>
          <Icon name="search-outline" size={24} color="#44403C" />
          <SearchInput
            placeholder="Search Here"
            placeholderTextColor="#44403C"
            value={searchText || ''}
            onChangeText={(val) => {
              handleSearchChange({
                searchType: 'searchByWord',
                value: val,
              });
              setShowSuggestions(true);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </SearchContainer>
        {renderSuggestions()}
        <RightIconsContainer>
          <IconContainer>
            <Icon name="options-outline" size={24} color="white" onPress={() => setModalVisible(true)} />
          </IconContainer>
        </RightIconsContainer>
      </SearchRow>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalWrapper>
          {renderModalContent()}
        </ModalWrapper>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;
