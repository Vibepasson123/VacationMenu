import React, {  useReducer, useCallback, useMemo, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { hotelManagerReducer, initialHotelListState } from './hotelManagerReducer';
import { HotelMangerContext } from './hotel-context';
import { HotelManager } from '../utils/GlobalValues';
import Loader from '../components/loader';
import { StyleSheet } from 'react-native';
import { LoaderWrapper } from '../styled/styledComponents';
interface FetchProviderProps {
  children: ReactNode;
}
export const HotelManagerProvider = ({ children }: FetchProviderProps) => {
  const [state, dispatch] = useReducer(hotelManagerReducer, initialHotelListState);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    getHotelData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHotelData = useCallback(async () => {
    if(!state.hotelList){
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await axios.get(HotelManager.DataUrl);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error: any) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    }

  }, [state.hotelList]);

  const handleSearchChange = useCallback((text: string) => {
    setSearchText(text);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    const newTimeout = setTimeout(() => {
      if (text.length > 0 && state.hotelList) {
        const filteredResults = state.hotelList.filter((hotel: any) =>
          hotel.name.toLowerCase().includes(text.toLowerCase()) ||
          hotel.location.address.toLowerCase().includes(text.toLowerCase()) ||
          hotel.location.city.toLowerCase().includes(text.toLowerCase())
        );
        const filteredSuggestions = filteredResults.map((hotel: any) => hotel.name).slice(0, 3);
        setSuggestions(filteredSuggestions);
      } else {
        setSuggestions([]);
      }
    }, 500);
    setDebounceTimeout(newTimeout);
  }, [debounceTimeout, state.hotelList]);

  const filteredHotelList = useMemo(() => {
    if (!searchText) {
      return state.hotelList;
    }
    return state.hotelList?.filter((hotel: any) =>
      hotel.name.toLowerCase().includes(searchText.toLowerCase()) ||
      hotel.location.address.toLowerCase().includes(searchText.toLowerCase()) ||
      hotel.location.city.toLowerCase().includes(searchText.toLowerCase())
    ) || [];
  }, [state.hotelList, searchText]);

  const contextValue = useMemo(() => ({
    getHotelData,
    hotelList: filteredHotelList,
    loading: state.loading,
    error: state.error,
    searchText,
    suggestions,
    handleSearchChange,
  }), [getHotelData, filteredHotelList, state.loading, state.error, searchText, suggestions, handleSearchChange]);

  return (
    <HotelMangerContext.Provider value={contextValue}>
      {state.loading && (
        <LoaderWrapper style={[StyleSheet.absoluteFill]} pointerEvents="none">
          <Loader />
        </LoaderWrapper>
      )}
      {children}
    </HotelMangerContext.Provider>
  );
};
