import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useHotelManger } from '../HotelManager/hotel-context';
import useCurrentLocation from '../hooks/useCurrentLocation';
import {
  HeaderContainer,
  IconContainer,
  LocationContainer,
  LocationRow,
  LocationText,
  RightIconsContainer,
  SearchContainer,
  SearchInput,
  SearchRow,
  SuggestionsContainer,
  SuggestionText,
} from '../styled/styled';
import { truncateText } from '../utils/helper';
const Header: React.FC = () => {
  const { searchText, suggestions, handleSearchChange } = useHotelManger();
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  const { address, refreshLocation } = useCurrentLocation();
  const [isFocused, setIsFocused] = React.useState(false);

  const renderSuggestions = () => {
    if (!showSuggestions || suggestions?.length === 0) {
      return null;
    }
    return (
      <SuggestionsContainer>
        {suggestions?.map((suggestion, index) => (
          <TouchableOpacity key={index} onPress={() => { handleSearchChange(suggestion); setShowSuggestions(false); }}>
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
          <Icon name="location-outline" size={24} color="white" onPress={refreshLocation} />
          <LocationText>{truncateText(address ? address : 'Home', 20)}</LocationText>
        </LocationRow>
        <RightIconsContainer>
          <IconContainer>
            <Icon name="notifications-outline" size={24} color="white" />
          </IconContainer>
        </RightIconsContainer>
      </LocationContainer>
      <SearchRow>
        <SearchContainer isFocused={isFocused}>
          <Icon name="search-outline" size={24} color="gray" />
          <SearchInput
            placeholder="Search Here"
            value={searchText ? searchText : undefined}
            onChangeText={(val) => { handleSearchChange(val); setShowSuggestions(!showSuggestions); }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </SearchContainer>
        {renderSuggestions()}
        <RightIconsContainer>
          <IconContainer>
            <Icon name="options-outline" size={24} color="white" />
          </IconContainer>
        </RightIconsContainer>
      </SearchRow>
    </HeaderContainer>
  );
};

export default Header;

